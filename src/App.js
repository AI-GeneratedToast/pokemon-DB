import { useEffect, useState } from "react";
import { Navbar } from "./Components/Navbar./Navbar";
import axios from "axios";
import { PokemonList } from "./Components/PokemonList/PokemonList";
import "./Components/general.css"
import { Pagination } from "./Components/Pagination/Pagination";


function App() {
    const [pokemonListe,setPokemonListe] = useState([]);
    const [currentPage,setCurrentPage] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [prevPage,setPrevPage] = useState('');
    const [nextPage,setNextPage] = useState('');

    useEffect(() => {
      axios.get(currentPage)
        .then(response => {
          setNextPage(response.data.next);
          setPrevPage(response.data.previous);
      
        const promises = response.data.results.map(p =>
          axios.get(p.url)
            .then(response => response.data)
        );
        Promise.all(promises)
          .then(pokemonDataArray => {
            setPokemonListe(pokemonDataArray);
          })
        })

    },[currentPage]);

    const gotoNextPage = () =>{
      setCurrentPage(nextPage);
    }

    const gotoPrevPage = () =>{
      setCurrentPage(prevPage);
    }

  return (
    <div>
      <Navbar/>
      <PokemonList list={pokemonListe}/>
      <Pagination 
      gotoNextPage={nextPage ?  gotoNextPage : null}
      gotoPrevPage={prevPage ?  gotoPrevPage : null}
      />
    </div>
  );
}

export default App;
