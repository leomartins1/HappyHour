import React, { useContext, useCallback } from 'react';
import { Link } from 'react-router-dom';
import DrinksContext from '../context/DrinksContext';

export default function DrinkList() {
  const { contextValue } = useContext(DrinksContext);
  const { Drinks } = contextValue;
  
  const handleDrinks = useCallback(() => {
    if (Drinks === undefined || Drinks === null) return 
    return (
      <div className="home">
      {
      Drinks.map((drink, index) => (
        <Link to={`/drink/${drink.idDrink}`} className="drink-card" key={ index }>
          <p>{drink.strDrink}</p>
          <img
            className="img-card"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
        </Link>
      ))}
    </div>
    )
  }, [Drinks])

  return (
    <div>{handleDrinks()}</div>
  );
}