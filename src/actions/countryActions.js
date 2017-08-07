import CountrySource from '../sources/CountrySource';

export function loadCountries(countries) {
  return {
    type: 'LOAD_COUNTRIES',
    countries,
  };
}

export function addCountry(country) {
  return {
    type: 'ADD_COUNTRY',
    country,
  };
}

export function editCountry(country) {
  return {
    type: 'EDIT_COUNTRY',
    country,
  };
}

export function fetchCountries() {
  return async (dispatch) => {
    try {
      const countries = await CountrySource.fetchCountries();
      dispatch(loadCountries(countries));
    } catch (e) {
      console.log(e);
    }
  };
}

export function postCountry(country) {
  return async (dispatch) => {
    try {
      await CountrySource.saveCountry(country);
      dispatch(addCountry(country));
    } catch (e) {
      console.log(e);
    }
  };
}

export function putCountry(country) {
  return async (dispatch) => {
    try {
      await CountrySource.saveCountry(country);
      dispatch(editCountry(country));
    } catch (e) {
      console.log(e);
    }
  };
}
