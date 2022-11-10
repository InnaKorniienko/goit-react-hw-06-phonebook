import React from "react";
import { useSelector, useDispatch } from "react-redux";
import css from "./Phonebook.module.css";
import { getFilter } from "redux/filter/filter-selectors";
import { setFilter } from "redux/filter/filter-slice";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <div className={css.filter}>
    <label className={css.label} > Find contacts by name </label>
    <input className={css.input} type="text" name="filter" value={filter} 
    onChange={e => dispatch(setFilter(e.target.value))}/>
    </div>
    )
}
