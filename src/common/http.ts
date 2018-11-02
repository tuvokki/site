import axios, { AxiosInstance } from 'axios';

export class Http {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://data.wouterroosendaal.nl/api/',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public async get(url: string, page: number) {
    const result = await this.httpClient.get(`${url}?page=${page}`);
    return result.data;
  }
}
