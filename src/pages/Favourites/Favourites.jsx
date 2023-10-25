import React from "react";
import { LayoutFavourites } from "../../layout/LayoutFavourites";
import { Card } from "../../components/Card/Card";

export const Favourites = ({
  searcher,
  inputSearcher,
  selected,
  schoolSelector,
  clickLike,
  collect,
  removeLike,
  students
}) => {
  return (
    <LayoutFavourites
      searcher={searcher}
      inputSearcher={inputSearcher}
      selected={selected}
      schoolSelector={schoolSelector}
      clickLike={clickLike}
      collect={collect}
      removeLike={removeLike}
      students={students}
    >
      {students
        .filter((elem) => {
          return collect.includes(elem.id) ? elem : false;
        })
        .map((el) => (
          <Card
            key={el.id}
            name={el.name}
            actor={el.actor}
            gender={el.gender}
            house={el.house}
            core={el.wand.core}
            alive={el.alive}
            id={el.id}
            image={el.image}
            clickLike={() =>
              collect.includes(el.id) ? removeLike(el.id) : clickLike(el.id)
            }
            liked={collect.includes(el.id)}
          />
        ))}
    </LayoutFavourites>
  );
};
