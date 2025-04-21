import React, { useEffect, useState } from 'react';
import '../index.css';
import PokemonCards from './PokemonCards';
import SearchPokemon from './SearchPokemon';
import Loader from '../Loader/Loader';
import { motion } from 'framer-motion';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const API = 'https://pokeapi.co/api/v2/pokemon?limit=252';

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailedPokemonData = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div><h1>Warning! : {error.message}</h1></div>;
  }

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="container">
      <header>
        <h1 className='header-text'>Pokemon List</h1>
      </header>
      <SearchPokemon search={search} setSearch={setSearch} />
      <div className='main-card'>
        <motion.ul
          className="cards"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {searchData.map((curPokemon, index) => (
            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} index={index} />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Pokemon;
