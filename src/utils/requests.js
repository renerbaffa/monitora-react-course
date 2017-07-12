import request from 'superagent';

async function doGetRequest(url, params) {
  try {
    const toReturn = await request
      .get(url)
      .send(params)
      .accept('application/json')
      .type('application/json');

    // @baffa: remove console.log
    console.log(toReturn);

    return toReturn;
  } catch (error) {
    return ({
      type: 'error',
      error,
    });
  }
}

export default doGetRequest;
