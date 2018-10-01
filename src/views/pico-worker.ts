import axios, { AxiosInstance, AxiosTransformer } from 'axios';
import RpcParams from '@/views/rpc-params';

export default class PicoWorker {
  private api: AxiosInstance;
  private rpcParams: RpcParams = {
    id: Date.now(),
    jsonrpc: '2.0',
  };

  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:8000/',
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
      id: 1,
    };
    // this.rpcParams.transformResponse = [this.yoloLala];
    this.rpcParams.transformResponse = this.yoloLala;

    const result = await this.api.post('/frontpage/rpc/', this.rpcParams);
    // const p = JSON.parse(result.result);
    // // FIXME: Quick fix the image url
    // p[0].fields.image = `http://localhost:8000/uploads/${p[0].fields.image}`;
    // this.heroOne = p[0].fields;

    return result.data;
  }

  // prettier-ignore
  private yoloLala: AxiosTransformer = (data) => {
    console.log(data);
  }
}
