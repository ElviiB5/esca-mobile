import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducers';
import partiesReducer from './reducers/partiesReducer';

const rootReducer = combineReducers({ authReducer, partiesReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));