import {combineReducers} from 'redux';

import contactsReducer from './contacts.js';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;
