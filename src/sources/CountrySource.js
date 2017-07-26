import request from 'superagent';

import backend from '../utils/constants';

const FETCH_COUNTRIES_URL = `${backend}/city/getAllCity`;

const CountrySource = {
  fetchCountries: () =>
    new Promise((resolve, reject) =>
      request
        .get(FETCH_COUNTRIES_URL)
        .accept('application/json')
        .type('application/json')
        .end((err, res) => {
          if (res && res.body) {
            resolve(res.body);
          }
          // @TODO: need to handle error case
        }),
    ),
};

export default CountrySource;
