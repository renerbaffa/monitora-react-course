import Dispatcher from '../dispatcher';

import CountrySource from '../sources/CountrySource';

export function fetchCountries() {
    CountrySource.fetchCountries().then((countries) => {
        Dispatcher.dispatch({
            type: 'UPDATE_COUNTRIES',
            countries,
        });
    });
}

export default {
    fetchCountries,
};
