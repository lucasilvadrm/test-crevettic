// https://servicodados.ibge.gov.br/api/v1/localidades/estados
// https://servicodados.ibge.gov.br/api/v1/localidades/estados/23/municipios
const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1';

// eslint-disable-next-line consistent-return
export const fetchStates = async () => {
  const url = `${BASE_URL}/localidades/estados`;
  try {
    const response = await (await fetch(url)).json();
    return response;
  } catch {}
};

// eslint-disable-next-line consistent-return
export const fetchCities = async (state) => {
  if (!state) return Promise.resolve([]);
  const url = `${BASE_URL}/localidades/estados/${state}/municipios`;
  try {
    const response = await (await fetch(url)).json();
    return response;
  } catch {}
};
