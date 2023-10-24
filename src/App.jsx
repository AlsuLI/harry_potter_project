import { useEffect, useState } from "react";
import "./global.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Favourites } from "./pages/Favourites/Favourites";
import { NotFound } from "./pages/NotFound/NotFound";
import { students } from "./components/Card/Students";


function App() {
  const [searcher, setSearcher] = useState("");
  const inputSearcher = (e) => setSearcher(e.target.value);

  const [selected, setSelected] = useState("");
  const schoolSelector = (e) => setSelected(e.target.value);

  const [collect, setCollect] = useState(
    JSON.parse(localStorage.getItem("Ilike")) ?? []
  );

  const removeLike = (id) => {
    setCollect(collect.filter((el) => el !== id));
  };

  const clickLike = (id) => {
    setCollect([...collect, id]);
  };

  useEffect(
    () => localStorage.setItem("Ilike", JSON.stringify(collect)),
    [collect]
  );

  const [favs, setFavs] = useState()

  // const makeFavs = () => {
  // setFavs(collect.filter((el) => el.id === favArray[0] ))
  // }

console.log(students[0].id);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home
          searcher={searcher}
          inputSearcher={inputSearcher}
          selected={selected}
          schoolSelector={schoolSelector}
          clickLike={clickLike}
          collect={collect}
          removeLike={removeLike}
        />
      ),
    },
    {
      path: "/favourites",
      element: (
        <Favourites
          searcher={searcher}
          inputSearcher={inputSearcher}
          selected={selected}
          schoolSelector={schoolSelector}
          clickLike={clickLike}
          collect={collect}
          removeLike={removeLike}

        />
      ),
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
