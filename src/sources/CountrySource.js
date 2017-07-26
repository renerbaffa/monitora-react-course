import doGetRequest from '../utils/requests';

import backend from '../utils/constants';

const FETCH_COUNTRIES_URL = `${backend}/city/getAllCity`;

const CountrySource = {
  fetchCountries: () => doGetRequest(FETCH_COUNTRIES_URL),
};

export default CountrySource;
