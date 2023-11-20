import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducers';
import partiesReducer from './reducers/partiesReducer';
import basicReducer from './reducers/basicReducer';
import votesReducer from './reducers/votesReducer';
import usersReducer from './reducers/usersReducer';
import generalReducer from './reducers/generalReducer';

const rootReducer = combineReducers({ authReducer, partiesReducer, basicReducer, votesReducer, usersReducer, generalReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));