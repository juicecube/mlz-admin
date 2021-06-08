import React, { useState, useEffect } from 'react';
import { default as Staff } from './model';
import useBasicRequest from '../shared/basic-request-hook';
import { useStaffLogoutOptions } from './index.type';

const useStaffLogout = (options?: useStaffLogoutOptions, deps?: any[]) => useBasicRequest<useStaffLogoutOptions, any>(Staff.create().lougout, { deps, ...options });
export default useStaffLogout;
