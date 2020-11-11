import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import { getVisibleCustomers } from './selectors/customers';
import { addCustomer } from './actions/customers';
import { setTextFilter } from './actions/filters';


const store = configureStore();


store.dispatch(addCustomer({ firstName: "Trajan", lastName: "Rummel", numOfChildren: 2, hourlyRate: "2.50" }));
store.dispatch(addCustomer({ firstName: "Lauren", lastName: "Butler", numOfChildren: 7, hourlyRate: "1.50" }));

store.dispatch(setTextFilter("Rummel"));


const state = store.getState();
const visibleCustomers = getVisibleCustomers(state.customers, state.filters);
console.log(visibleCustomers);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(
  jsx,
  document.getElementById('root')
);

