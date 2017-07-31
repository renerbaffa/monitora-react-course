import { ReduceStore } from 'flux/utils';
import dispatcher from '../dispatcher';

class CountryStore extends ReduceStore {
    constructor() {
        super(dispatcher);
    }

    getInitialState() {
        return {
            countries: [],
        };
    }

    reduce(state, action) {
        switch(action.type) {
            case 'UPDATE_COUNTRIES':
                return {
                    ...state,
                    countries: action.countries,
                }
            
            default:
                return state;
        }
    }
}

export default new CountryStore();  
