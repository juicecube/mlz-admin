import React, { createContext, useState } from 'react';
import aliveStore from './keep-alive.store';
export function reducer(state, action) {
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
const KeepAlive = (props) => {
  const [_, setPayload] = useState({});
  const dispatch = ($name, $args) => {
    setPayload(aliveStore.getSnapshot(props.name)?.payload);
    aliveStore.pushStateIntoSnapshots($name, $args);
  };
  return React.createElement(
    KAContext.Provider,
    {
      value: {
        payload: aliveStore.getSnapshot(props.name)?.payload,
        dispatch,
        launchedAt: aliveStore.launchTime,
      },
    },
    React.createElement(KAContext.Consumer, null, (providerValues) => props.children),
  );
};
export default KeepAlive;
//# sourceMappingURL=index.js.map
