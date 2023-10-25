import { useEffect, useState } from "react";
import "./global.scss";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Favourites } from "./pages/Favourites/Favourites";
import { NotFound } from "./pages/NotFound/NotFound";


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((students) => setStudents(students));
  }, []);

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

  const router = createHashRouter([
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
          students={students}
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
          students={students}
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
