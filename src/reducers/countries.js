export const INITIAL_STATE = {
  ids: [],
  content: {},
};

function normalize(countryList) {
  const ids = [];
  const content = {};
  countryList.forEach((country) => {
    ids.push(country.id);
    content[country.id] = country;
  });
  return {
    ids,
    content,
  };
}

export default function countries(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_COUNTRIES':
      return normalize(action.countries);

    case 'ADD_COUNTRY':
      return {
        // ids: state.ids.concat(action.country.id),
        ids: [...state.ids, action.country.id],
        // content: Object.assign({}, state.content, { [action.country.id]: action.cuntry }),]
        content: {
          ...state.content,
          [action.country.id]: action.country,
        },
      };

    case 'EDIT_COUNTRY':
      return {
        ids: state.ids,
        content: {
          ...state.content,
          [action.country.id]: action.country,
        },
      };

    default:
      return state;
  }
}
