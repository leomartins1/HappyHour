import React, { useContext, useState } from 'react';
import DrinksContext from '../context/DrinksContext';

export default function SearchInput() {
  const { contextValue } = useContext(DrinksContext);
  const [ filters, setFilters ] = useState({ query: '', input: ''})
  const { setDrinks } = contextValue;

  function handleFilter({ target: { value } }) {
    setFilters({
      ...filters,
      input: value,
    });
  }

  function handleChange({ target: { id } }) {
    setFilters({
      ...filters,
      query: id,
    });
  }

  return (
    <>
    <input type="text" data-testid="name-filter" onChange={ handleFilter } />
    <form onChange={ handleChange }>
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="search"
            id="ingredient"
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="radio"
            data-testid="name-search-radio"
            name="search"
            id="name"
          />
        </label>
        <label htmlFor="first-letter">
          First Letter
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="search"
            id="first-letter"
          />
        </label>
        </form>
    </>
  );
}
