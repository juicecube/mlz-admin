import React, { useContext, createContext, useState, useEffect } from 'react';
import { KeepAliveTypes as KTs } from './keep-alive';
import aliveStore, { SnapshotType } from './keep-alive.store';

export function reducer(state: any, action: any) {
  switch (action.type) {
    case 'ADD_NUM':
      return { ...state, value: state.value + 1 };
    case 'REDUCE_NUM':
      return { ...state, value: state.value - 1 };
    default:
      throw new Error();
  }
}

export const KAContext = createContext(null);
const KeepAlive: React.FC<KTs.KeepAliveProps> = (props: KTs.KeepAliveProps) => {
  const [_, setPayload] = useState<any>({});
  const dispatch = ($name: string, $args: any) => {
    setPayload(aliveStore.getSnapshot(props.name)?.payload);
    aliveStore.pushStateIntoSnapshots($name, $args);
  };
  return (
    <KAContext.Provider
      value={
        {
          payload: aliveStore.getSnapshot(props.name)?.payload,
          dispatch,
          launchedAt: aliveStore.launchTime,
        } as any
      }>
      <KAContext.Consumer>{(providerValues) => props.children}</KAContext.Consumer>
    </KAContext.Provider>
  );
};

export default KeepAlive;
