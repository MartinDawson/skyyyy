import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import members from './membersReducer';
import messages from './messagesReducer';

const reducer = combineReducers({
  members,
  messages
})

export const store = createStore(reducer, {}, applyMiddleware(
  promiseMiddleware()
));