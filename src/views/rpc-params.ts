import { AxiosTransformer } from 'axios';
export default interface RpcParams {
  method?: string;
  jsonrpc: string;
  id: number;
  params?: object;
  transformResponse?: AxiosTransformer | AxiosTransformer[];
}
