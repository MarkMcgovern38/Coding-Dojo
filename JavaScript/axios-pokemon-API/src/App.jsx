import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

    const [pokemon, setPokemon] = useState([])

  useEffect (() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <h1 class="d-flex justify-content-center align-items-center">Pokemon API</h1>
      <div class="row">
        <div className="col-5"></div>
        <div className="col-7">
          {
            pokemon.map((char, idx) => (
              <ul>
                <li class="mt-3 align-items-center">{char.name}</li>
              </ul>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
