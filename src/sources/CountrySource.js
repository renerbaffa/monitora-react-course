import { doGetRequest, doPostRequest } from '../utils/requests';

import backend from '../utils/constants';

const FETCH_COUNTRIES_URL = `${backend}/city/getAllCity`;
const SAVE_COUNTRY_URL = `${backend}/country/saveCountry`;

const CountrySource = {
  fetchCountries: () => doGetRequest(FETCH_COUNTRIES_URL),
  saveCountry: (country) => {
    // format data according to backend expectations
    const c = { country: { id: country.id, name: country.name, iso: country.iso2 } };

    return doPostRequest(SAVE_COUNTRY_URL, c);
  },
};

export default CountrySource;
