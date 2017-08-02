import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// disabled for prod
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers';

function configureStore() {
  return createStore(
    reducers,
    /* preloadedState, */
    composeWithDevTools(
      applyMiddleware(
        thunk,
      ),
    ),
  );
}

const store = configureStore();

export default store;
