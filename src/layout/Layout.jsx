import React from "react";
import { Header } from "./Header/Header";
import { Container } from "../components/Container/Container";
import s from './Layout.module.scss'

export const Layout = ({ searcher, inputSearcher, selected, schoolSelector, children }) => {
  return (
    <>
      <Header
        inputSearcher={inputSearcher}
        searcher={searcher}
        selected={selected}
        schoolSelector={schoolSelector}
      />
      <Container>
        <main className={s.main___card__wrapper}>{children}</main>
      </Container>
    </>
  );
};
