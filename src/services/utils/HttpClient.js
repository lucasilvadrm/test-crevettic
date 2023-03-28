import { delay } from '../../utils/delay';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(path) {
    return this.makeRequest(path);
  }

  async makeRequest(path) {
    await delay(500);

    const response = await fetch(`${this.baseURL}${path}`);

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new Error('Erro ao buscar dados');
  }
}

export default HttpClient;
