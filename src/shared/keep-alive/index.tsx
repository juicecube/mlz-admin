import React, { createContext, useState } from 'react';
import { getDataType } from 'mytils';
import { KeepAliveProps } from './keep-alive.type';
import cachingStore, { IKAContext, SnapshotType } from './keep-alive.store';

export const KAContext = createContext<IKAContext>({} as IKAContext);
const KeepAlive: React.FC<KeepAliveProps> = (props: KeepAliveProps) => {
  const [_, setPayload] = useState([]);
  const dispatch = ($args: SnapshotType | SnapshotType[]): void => {
    const args = getDataType($args) === 'array' ? $args : [$args];
    cachingStore.pushStateIntoSnapshots(props.name, args);
    setPayload(cachingStore.getSnapshot(props.name)?.payload);
  };
  return (
    <KAContext.Provider
      value={{
        payload: cachingStore.getSnapshot(props.name)?.payload,
        dispatch,
        launchedAt: cachingStore.launchTime,
      }}>
      <KAContext.Consumer>
        {(providerValues) => {
          console.log(providerValues, 312);
          return props.children;
        }}
      </KAContext.Consumer>
    </KAContext.Provider>
  );
};

export default KeepAlive;
