import doGetRequest from '../utils/requests';

// @baffa: extract main URL for a constant file
const GET_URL = 'http://34.212.232.97:8080/city/getAllCity';

function fetchCountries() {
  return doGetRequest(GET_URL);
}

export default fetchCountries;
