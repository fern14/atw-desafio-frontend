import React from "react";
import "./styles.css"
import { NavBar } from "./componentes/NavBar";
import Pokedex from "./componentes/Pokedex";
import { getPokemons, getPokemonsData } from "./api";

const { useState, useEffect } = React;

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);
        const data = await getPokemons(20, 20 * page);
        const promises = data.results.map(async (pokemon) => {
          return await getPokemonsData(pokemon.url)
        })
        const results = await Promise.all(promises)
        setPokemons(results)
        setLoading(false);
        setTotal(data.count / 20)
      } catch (err) {

      }
    }
    fetchPokemons();
  }, [page]);

  return (
    <div>
      <NavBar />
      <div className="App">
        {loading ? <div>Carregando pokemons...</div>
          :
          <Pokedex
            pokemons={pokemons}
            page={page}
            setPage={setPage}
            total={total}
          />
        }
      </div>
    </div>
  );
}

export default App;
