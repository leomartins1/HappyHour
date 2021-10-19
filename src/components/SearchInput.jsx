import React, { useContext, useState } from 'react';
import DrinksContext from '../context/DrinksContext';
import { fetchDrinksByFirstLetter, fetchDrinksByIngredient, fetchDrinksByName } from '../services/fetchCocktails';

const THE_LAST_ONE = 25;

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

  async function handleClick() {
    switch (filters.query) {
      case 'ingredient': {
        const drinks = await fetchDrinksByIngredient(filters.input)
        const first24 = drinks.slice(0, THE_LAST_ONE)
        setDrinks(first24);
        break;
      }
      case 'name': {
        const drinks = await fetchDrinksByName(filters.input)
        const first24 = drinks.slice(0, THE_LAST_ONE)
        setDrinks(first24);
        break;
      }
      case 'first-letter': {
        const drinks = await fetchDrinksByFirstLetter(filters.input)
        const first24 = drinks.slice(0, THE_LAST_ONE)
        setDrinks(first24);
        break;
      }
      default:
        break;
    }
  }

  return (
    <>
    <input type="text" data-testid="name-filter" onChange={ handleFilter } />
    <form onChange={ handleChange }>
        <label htmlFor="ingredient">
          Ingrediente
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="search"
            id="ingredient"
          />
        </label>
        <label htmlFor="name">
          Nome
          <input
            type="radio"
            data-testid="name-search-radio"
            name="search"
            id="name"
          />
        </label>
        <label htmlFor="first-letter">
          Primeira Letra
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="search"
            id="first-letter"
          />
        </label>
        </form>
        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ handleClick }
        >
            Pesquisar
        </button>
    </>
  );
}
