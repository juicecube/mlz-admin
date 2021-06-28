export type TContact = {
  id: string;
  name: string;
};

export type TMenuListItem = {
  menu_code: string;
  menu_id: number;
  menu_name: string;
  order_number: number;
  parent_id: number;
};

export interface TMenuResponse extends Response {
  readonly appid: number;
  readonly app_name: string;
  readonly authorizationContact: TContact;
  readonly menu_list: TMenuListItem[];
}

export type TResourceListItem = {
  description: string;
  resourceId: number;
  resource_code: string;
  resource_name: string;
  resource_url: string;
  status: 'YES' | 'NO';
};

export interface TResourceResponse extends Response {
  readonly app_id: number;
  readonly app_name: string;
  readonly menu_id: number;
  readonly resources: TResourceListItem[];
}

export interface useAuthGuardOptions {}

export interface IAuthRequestParams {
  host?: string;
}
