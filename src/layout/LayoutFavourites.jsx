import React from "react";
import { Container } from "../components/Container/Container";
import s from "./Layout.module.scss";
import { Header2 } from './Header2/Header2';

export const LayoutFavourites = ({children}) => {
  return (
    <>
      <Header2/>
      <Container>
        <main className={s.main___card__wrapper}>{children}</main>
      </Container>
    </>
  );
};
