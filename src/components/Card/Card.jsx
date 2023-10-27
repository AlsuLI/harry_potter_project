import React from "react";
import s from "./Card.module.scss"
import Like from './assets/Like.svg'
import Liked from './assets/Liked.svg'

export const Card = ({ name, actor, gender, house, core, alive, id, image, clickLike, liked  }) => {
 
  return (
    <div className={s.card__wrapper}>
      <div className={s.card__button__like}>
        <input
          className={s.card__button__input}
          onClick={clickLike}
          type="image"
          src={liked ? Liked : Like}
        />
      </div>
      <img src={image} alt="" className={s.card__image} />
      <div className={s.card__text__wrapper}>
        <h2 className={s.card__text__name}>Name: {name}</h2>
        <ul className={s.card__text__holder}>
          <li>Actor: {actor}</li>
          <li>Gender: {gender}</li>
          <li>House: {house}</li>
          <li>Wand Core: {core}</li>
          <li>Alive: {alive ? "yes" : "no"}</li>
        </ul>
      </div>
    </div>
  );
};
