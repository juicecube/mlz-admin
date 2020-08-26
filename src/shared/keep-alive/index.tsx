import React, { createContext, useState, useEffect } from 'react';
import { KeepAliveProps } from './keep-alive.type';
import cachingStore, { IKAContext, SnapshotType } from './keep-alive.store';
import { omitProps } from 'mytils';
import { commonPaginationKeys } from '../../table/common-table';

export const KAContext = createContext({} as IKAContext);
const KeepAlive: React.FC<KeepAliveProps> = (props: KeepAliveProps) => {
  const [_, setPayload] = useState([]);
  const dispatch = ($args: SnapshotType): void => {
    cachingStore.pushStateIntoSnapshots(props.name, $args);
    setPayload(cachingStore.getSnapshot(props.name)?.payload);
  };
  useEffect(() => {
    props?.onCacheHitted?.({
      pagination: {},
      searchs: omitProps(commonPaginationKeys, cachingStore.getSnapshot(props.name)),
    });
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
