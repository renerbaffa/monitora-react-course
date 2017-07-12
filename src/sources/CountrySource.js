import doGetRequest from '../utils/requests';
import backend from '../utils/constants';

// @baffa: extract main URL for a constant file
const GET_URL = `${backend}/country/getAllCountry`;

async function fetchCountries(cb) {
  try {
    const ret = await doGetRequest(GET_URL);
    cb(ret.body);
  } catch (e) {
    console.log('Error: ', e);
  }
}

export default fetchCountries;
