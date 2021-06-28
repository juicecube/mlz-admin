import React, { createContext, useContext } from 'react';
import useAuthGuard from '..';

const InnerAuthMenu = (props: any) => {
  console.log(props, 'InnerAuthMenu');
  return <div>1234</div>;
};

const AuthMenu = (props?: any) => {
  const { AuthGuard } = useAuthGuard();
  return <AuthGuard>{(info) => <InnerAuthMenu {...props} />}</AuthGuard>;
};

export default AuthMenu;
