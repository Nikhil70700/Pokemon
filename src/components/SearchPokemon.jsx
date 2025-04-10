import React from 'react';

const SearchPokemon = ({ search, setSearch }) => {
  return (
    <div className="pokemon-search">
      <input
        type="text"
        placeholder="Search Pokemon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchPokemon;
