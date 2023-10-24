import React from 'react'
import s from "./Input.module.scss"

export const Input = ({searcher,  inputSearcher}) => {
  

  return (
    <div className={s.header__input__wrapper}>
      <label htmlFor="searcher" className={s.header__input__label}>
        Name
      </label>
      <input
        onChange={inputSearcher}
        type="text"
        placeholder="Hermione"
        name="searcher"
        className={s.header__input}
        value={searcher}
      />
    </div>
  );
}
