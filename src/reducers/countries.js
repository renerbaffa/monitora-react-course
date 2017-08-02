const INITIAL_STATE = [];

export default function countries(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      return action.countries;
    case 'ADD_COUNTRY':
      return state.concat(action.country);
    default:
      return state;
  }
}
