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
        } else {
          reject('Error on fetching for countries');
        }
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
        } else {
          reject('Error on saving country');
        }
      }),
  );
}
