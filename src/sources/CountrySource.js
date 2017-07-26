import request from 'superagent';

const CountrySource = {
  fetchCountries: () =>
    new Promise((resolve, reject) =>
      request
        .get('http://34.212.232.97:8080/city/getAllCity')
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
