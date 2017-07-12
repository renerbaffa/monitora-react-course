import request from 'superagent';

export function doGetRequest(url, params) {
  return request
    .get(url)
    .send(params)
    .accept('application/json')
    .type('application/json');
}

export function doPostRequest(url, params) {
  return request
    .post(url)
    .send(params)
    .accept('application/json')
    .type('application/json');
}
