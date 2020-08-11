import React, { createContext, useState } from 'react';
import { getDataType } from 'mytils';
import { KeepAliveProps } from './keep-alive.type';
import cachingStore, { IKAContext, SnapshotType } from './keep-alive.store';

export const KAContext = createContext<IKAContext>({} as IKAContext);
const KeepAlive: React.FC<KeepAliveProps> = (props: KeepAliveProps) => {
  const [_, setPayload] = useState([]);
  const dispatch = ($args: SnapshotType | SnapshotType[]): void => {
    console.log($args, '触发了dispatch');
    const args = getDataType($args) === 'array' ? $args : [$args];
    cachingStore.pushStateIntoSnapshots(props.name, args);
    setPayload(cachingStore.getSnapshot(props.name)?.payload);
  };
  const childChanger = props.children?.props?.[props.triggerEvent || 'onChange'];
  // console.log(childChanger, 'childChanger');
  console.log(props.children, 'child props');
  if (childChanger) {
    // dispatch.call(1, { a: 1 });
    // console.log('childChanger');
    // props.children.props.onChange = (p) => {
    //   // 出发dispatch
    //   console.log('nnn');
    //   childChanger?.(p);
    // };
  }

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
