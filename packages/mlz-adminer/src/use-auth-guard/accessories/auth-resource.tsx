import React, { useMemo } from 'react';
import useAuthGuard from '..';

const AuthResource = (props: { code: string; children: React.ReactElement; disabledOrHidden?: 'disabled' | 'hidden' }) => {
  const { code, children, disabledOrHidden = 'hidden' } = props;
  const { AuthGuardRender } = useAuthGuard();
  const nullChild = useMemo(() => {
    if (disabledOrHidden === 'hidden') {
      return <></>;
    } else {
      return React.cloneElement(children, { disabled: true });
    }
  }, [children, disabledOrHidden]);
  return <AuthGuardRender>{({ resourceMap }) => (resourceMap.has(code) ? children : nullChild)}</AuthGuardRender>;
};

export default AuthResource;
