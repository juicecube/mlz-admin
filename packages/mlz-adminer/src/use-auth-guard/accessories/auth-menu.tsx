import React, { createContext, useContext } from 'react';
import useAuthGuard from '..';
import { IAuthMenuProps } from '../index.type';

const InnerAuthMenu = (props: Required<IAuthMenuProps>) => {
  const { info, subMenuFlag } = props;
  const { menus = [] } = info || {};

  // 根据subMenuFlag group出父子菜单
  return <div>1234</div>;
};

const AuthMenu = (props?: IAuthMenuProps) => {
  const { AuthGuard } = useAuthGuard();
  return <AuthGuard>{(info) => <InnerAuthMenu info={info} subMenuFlag="parent_id" {...props} />}</AuthGuard>;
};

export default AuthMenu;
