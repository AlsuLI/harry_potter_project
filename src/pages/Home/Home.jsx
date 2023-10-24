import React from 'react'
import { Card } from "../../components/Card/Card";
import { students } from "../../components/Card/Students";
import Button from "../../layout/assets/Button.svg";
import { Layout } from '../../layout/Layout';
import { Link } from "react-router-dom";

export const Home = ({
  searcher,
  inputSearcher,
  selected,
  schoolSelector,
  clickLike,
  collect,
  removeLike
}) => {
  return (
    <>
      <Layout
        searcher={searcher}
        inputSearcher={inputSearcher}
        selected={selected}
        schoolSelector={schoolSelector}
      >
        <button className="button__show__likes">
          <img src={Button} alt="liked" />
          <Link to="/favourites">Show Liked</Link>
        </button>
        {students
          .filter((el) => {
            return selected === "" ? el : el.house === selected;
          })
          .filter((el) => {
            return searcher.toLowerCase() === ""
              ? el
              : el.name.toLowerCase().includes(searcher) ||
                  el.actor.toLowerCase().includes(searcher);
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
      </Layout>
    </>
  );
};
