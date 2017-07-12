import request from 'superagent';

function doGetRequest(url, params) {
  return request
    .get(url)
    .send(params)
    .accept('application/json')
    .type('application/json');
}

export default doGetRequest;
