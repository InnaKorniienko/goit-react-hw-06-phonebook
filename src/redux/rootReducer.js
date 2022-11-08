import { combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-reducer";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer
});

export default rootReducer;