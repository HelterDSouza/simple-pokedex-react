import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results);
      });
    return () => {
      cancel();
    };
  }, [currentPageUrl]);

  if (loading) {
    return <span>Loading ...</span>;
  }

  const handleNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };
  const handlePreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };
  return (
    <div className="App">
      <PokemonList pokemons={pokemon} />
      <Pagination
        gotoNextPage={nextPageUrl ? handleNextPage : null}
        gotoPreviousPage={previousPageUrl ? handlePreviousPage : null}
      />
    </div>
  );
}

export default App;
