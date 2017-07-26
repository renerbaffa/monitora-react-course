import request from 'superagent';

function doGetRequest(url) {
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

export default doGetRequest;
