import React from 'react'
import s from './Header2.module.scss'
import { Link } from "react-router-dom";
import { Container } from '../../components/Container/Container';

export const Header2 = () => {
  return (
    <Container>
      <div className={s.header__favourites}>
        <Link className={s.header__fafourites__link} to="/">← Back To All</Link>
        <h1 className={s.header__title}>Liked ones</h1>
        <p className={s.header__text}>
          Your favorite characters from the Harry Potter universe.
        </p>
      </div>
    </Container>
  );
}
