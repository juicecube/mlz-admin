import React, { createContext, useState, useEffect } from 'react';
import { getDataType } from 'mytils';
import { KeepAliveProps } from './keep-alive.type';
import cachingStore, { IKAContext, SnapshotType } from './keep-alive.store';

export const KAContext = createContext({} as IKAContext);
const KeepAlive: React.FC<KeepAliveProps> = (props: KeepAliveProps) => {
  const [_, setPayload] = useState([]);
  const dispatch = ($args: SnapshotType): void => {
    console.log($args, '触发了dispatch');
    cachingStore.pushStateIntoSnapshots(props.name, $args);
    setPayload(cachingStore.getSnapshot(props.name)?.payload);
  };
  useEffect(() => {
    props?.onCacheHitted?.(cachingStore.getSnapshot(props.name));
  }, []);
  return (
    <KAContext.Provider
      value={{
        payload: cachingStore.getSnapshot(props.name)?.payload,
        dispatch,
        launchedAt: cachingStore.launchTime,
      }}>
      <KAContext.Consumer>{() => props.children}</KAContext.Consumer>
    </KAContext.Provider>
  );
};

export default KeepAlive;
