import React, { useContext, useState } from 'react';
import DrinksContext from '../context/DrinksContext';
import { fetchDrinksByCategory, fetchDrinksByFirstLetter, fetchDrinksByIngredient, fetchDrinksByName } from '../services/fetchCocktails';
import icon from '../img/icon.svg';

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
        setDrinks(drinks);
        break;
      }
      case 'name': {
        const drinks = await fetchDrinksByName(filters.input)
        setDrinks(drinks);
        break;
      }
      case 'first-letter': {
        const drinks = await fetchDrinksByFirstLetter(filters.input)
        setDrinks(drinks);
        break;
      }
      case 'category': {
        const drinks = await fetchDrinksByCategory(filters.input)
        setDrinks(drinks);
        break;
      }
      default:
        break;
    }
  }

  return (
    <div className="search">
      <p className="title">Happy Hour</p>
      <input className="input" type="text" data-testid="name-filter" onChange={ handleFilter } />
      <form onChange={ handleChange } className="radios">
        <label htmlFor="ingredient">
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            name="search"
            id="ingredient"
          />
          Ingrediente
        </label>
        <label htmlFor="name">
          <input
            type="radio"
            data-testid="name-search-radio"
            name="search"
            id="name"
          />
          Nome
        </label>
        <label htmlFor="category">
          <input
            type="radio"
            data-testid="category-search-radio"
            name="search"
            id="category"
          />
          Categoria
        </label>
        <label htmlFor="first-letter">
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            name="search"
            id="first-letter"
          />
          Primeira Letra
        </label>
      </form>
      <img className="btn-src" alt="search-btn" onClick={ handleClick } src={icon}/>
    </div>
  );
}
