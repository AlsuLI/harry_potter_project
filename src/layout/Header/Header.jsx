import React from "react";
import s from "./Header.module.scss"
import { Input } from "../../ui/Input/Input";
import { Select } from "../../ui/Select/Select";
import { Container } from "../../components/Container/Container";


export const Header = ({ searcher, inputSearcher, selected, schoolSelector }) => {
  return (
    <Container>
      <header>
        <div className={s.header__wrapper}>
          <h1 className={s.header__title}>Harry Potter</h1>
          <p className={s.header__text}>
            View all characters from the Harry Potter universe.
          </p>
          <div className={s.header__select__input__wrapper}>
            <Input searcher={searcher} inputSearcher={inputSearcher} />
            <Select selected={selected} schoolSelector={schoolSelector} />
          </div>
        </div>
      </header>
    </Container>
  );
};
