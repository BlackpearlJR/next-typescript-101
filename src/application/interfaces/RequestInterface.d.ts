export interface Request{
  method: string;
  url: string;
  data: any;
  notification: boolean;
  auth: boolean;
  env: boolean;
}

export interface RequestHeaders{
  'Content-Type': string;
  Authorization: string;
}
