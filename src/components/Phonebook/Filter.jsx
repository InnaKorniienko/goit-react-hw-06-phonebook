import React from "react";
import PropTypes from "prop-types";
import css from "./Phonebook.module.css";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div className={css.filter}>
    <label className={css.label} > Find contacts by name </label>
    <input className={css.input} type="text" name="filter" value={value} 
    onChange={onChangeFilter}/>
    </div>
    )
}


Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};


