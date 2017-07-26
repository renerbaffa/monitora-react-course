import request from 'superagent';

export function doGetRequest(url) {
  return new Promise((resolve, reject) =>
    request
      .get(url)
      .accept('application/json')
      .type('application/json')
      .end((err, res) => {
        if (res && res.body) {
          resolve(res.body);
        }
        // @TODO: need to handle error case
      }),
    );
}

export function doPostRequest(url, params) {
  return new Promise((resolve, reject) =>
    request
      .post(url)
      .send(params)
      .accept('application/json')
      .type('application/json')
      .end((err, res) => {
        if (res && res.status && res.status === 200) {
          resolve(true);
        }
        // @TODO: need to handle error case
      }),
  );
}
