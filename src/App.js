import "./App.css";
import axios from "axios";
import Search from "./components/search";
import Pokemoncard from "./components/Pokemoncard";
import { useState } from "react";
function App() {
  const [pokemon, setpokemon] = useState();
  const [name,setname]= useState("");
  const Pokemon = (e) => {
    e.preventDefault();
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((response) => {
      console.log(response.data);
      setpokemon(response.data);
    });
  };
  return (
    <div className="App">
      {pokemon ? (
        <Pokemoncard pokemon={pokemon}/>
      ) : (
        <div className="search">
          <Search  setname={setname} Pokemon={Pokemon}/>
        </div>
      )}
    </div>
  );
}

export default App;
