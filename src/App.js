import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../src/components/card';


function App() {
  const [pokemons, setPokemons] = useState(null)
  const [page, setPage] = useState(1)
  useEffect(() => {
    axios.get(`https://pokedex20201.herokuapp.com/pokemons?page=${page}`)
      .then((response) => {
        setPokemons(response.data.data)
      }
      )
  }, [page]

  )


  return (
    <>
      <div className='Lista'>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <button onClick={() => setPage(page + 1)}>
        Proxima pagina
      </button>
      {page > 1 ?
        (<button onClick={() => setPage(page - 1)}>
          Pagina anterior
        </button>) : null}
    </>
  );
}

export default App;
