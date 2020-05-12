import React, { useContext, createContext, useState } from 'react';
import { KeepAliveTypes as KTs } from './keep-alive';
// import { pushStateIntoAlivesDict } from './keep-alive.store';

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

let testV = 1;

export const KAContext = createContext(testV);
const KeepAlive: React.FC<KTs.KeepAliveProps> = (props: KTs.KeepAliveProps) => {
  const [test, setTest] = useState(testV);
  return (
    // <KAContext.Provider
    //   value={{
    //     value: test,
    //     dispatch: setTest,
    //   }}>
    //   <button
    //     onClick={() => {
    //       setTest(test + 1);
    //       testV++;
    //     }}>
    //     测试
    //   </button>
    //   <div>{testV}</div>
    //   <KAContext.Consumer>
    //     {(providerValues) => {
    //       return props.children;
    //     }}
    //   </KAContext.Consumer>
    // </KAContext.Provider>
    null
  );
};

export default KeepAlive;
