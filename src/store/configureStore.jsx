import { createStore, combineReducers } from 'redux';
import customerReducer from '../reducers/customers';
import filtersReducer from '../reducers/filters';



const configureStore = () => {
    const store = createStore(combineReducers({
        customers: customerReducer,
        filters: filtersReducer
    }));
    return store;
};

export default configureStore;