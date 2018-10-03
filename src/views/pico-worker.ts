import axios, { AxiosInstance } from 'axios';
import store from '@/store';
import RpcParams from '@/views/rpc-params';

export default class PicoWorker {
  private api: AxiosInstance;
  private rpcParams: RpcParams = {
    id: Date.now(),
    jsonrpc: '2.0',
  };

  constructor() {
    this.api = axios.create({
      baseURL: store.state.baseURL,
      timeout: 1000,
      headers: {
        // prettier-ignore
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF8',
      },
    });
  }

  public async getHero(id: number) {
    this.rpcParams.method = 'fetchhero';
    this.rpcParams.params = {
      id,
    };

    const result = await this.api.post('/frontpage/rpc/', this.rpcParams);
    return result.data;
  }
}
