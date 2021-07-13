import { IBasicHooksOptions } from '../shared/basic-request-hook/index.type';

export type StaffMethods = string;
export type logoutParams = Record<string, any>;

export type useStaffLogoutOptions = Partial<IBasicHooksOptions>;

export interface useStaffOptions {
  method: string;
  uid?: string;
}

export interface ILogoutResponse {}
