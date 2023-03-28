import HttpClient from './utils/HttpClient';

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';

class PlacesService {
  constructor() {
    this.httpClient = new HttpClient(BASE_URL);
  }

  listStates() {
    return this.httpClient.get('/localidades/estados?orderBy=nome');
  }

  listCitiesByState(state) {
    if (!state) return Promise.resolve([]);
    return this.httpClient.get(`/localidades/estados/${state}/municipios?orderBy=nome`);
  }
}

export default new PlacesService();
