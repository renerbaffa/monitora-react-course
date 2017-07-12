import { doGetRequest, doPostRequest } from '../utils/requests';
import backend from '../utils/constants';

// @baffa: extract main URL for a constant file
const GET_URL = `${backend}/country/getAllCountry`;
const SAVE_URL = `${backend}/country/saveCountry`;

export async function fetchCountries(cb) {
  try {
    const ret = await doGetRequest(GET_URL);
    cb(ret.body);
  } catch (e) {
    console.log('Error: ', e);
  }
}

export async function saveCountry(country, cb) {
  try {
    const { id, name, iso2 } = country;
    const c = { country: { id: country.id, name: country.name, iso: country.iso2 } };
    await doPostRequest(SAVE_URL, c);
    cb(c.country);
  } catch (e) {
    console.log('Error: ', e);
  }
}

