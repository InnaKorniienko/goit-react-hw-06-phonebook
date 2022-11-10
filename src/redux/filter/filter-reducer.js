import { createReducer } from "@reduxjs/toolkit";
// import { setFilter } from "./filter-action";

const filterReducer = createReducer("", {
    [setFilter.type]: (_, { payload }) => payload
})

export default filterReducer;