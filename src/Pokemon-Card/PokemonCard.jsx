import React, { useState } from 'react';


const pokemon = [
  { id: 1, name: 'Bulbasaur' },
  { id: 2, name: 'Charmander' },
  { id: 3, name: 'Squirtle' },
];

// Search bar component
const SearchPokemon = ({ search, setSearch }) => (
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search Pokémon..."
  />
);

// Card component
const PokemonCards = ({ pokemonData }) => (
  <li className="card">
    <h2>{pokemonData.name}</h2>
  </li>
);

// Main component
const PokemonCard = () => {
  const [search, setSearch] = useState('');

  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="container">
      <header>
        <h1>Pokemon List</h1>
      </header>

      <SearchPokemon search={search} setSearch={setSearch} />

      <div className="main-card">
        <ul className="cards">
          {searchData.map((curPokemon) => (
            <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PokemonCard;
