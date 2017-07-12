import doGetRequest from '../utils/requests';

// @baffa: extract main URL for a constant file
const GET_URL = 'http://34.212.232.97:8080/city/getAllCity';

async function fetchCountries(cb) {
  try {
    const ret = await doGetRequest(GET_URL);
    cb(ret.body);
  } catch (e) {
    console.log('Error: ', e);
  }
}

export default fetchCountries;
