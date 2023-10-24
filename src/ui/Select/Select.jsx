import React from 'react'
import s from "./Select.module.scss"

export const Select = ({selected, schoolSelector}) => {
  console.log(selected);
  return (
    <div className={s.header__select__wrapper}>
      <label for="school-select">School</label>
      <select
        name="school-select"
        id="school-select"
        className={s.header__select}
        onChange={schoolSelector}
        value={selected}
      >
        <option value="">Choose one</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
      
    </div>
  );
}
