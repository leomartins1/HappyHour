import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useCallback } from 'react/cjs/react.development';
import DrinksContext from '../context/DrinksContext';

export default function DrinkList() {
  const { contextValue } = useContext(DrinksContext);
  const { Drinks } = contextValue;

  const handleDrinks = useCallback(() => {
    if (Drinks === undefined || Drinks === null) return 
    return (
      <div className="home">
      {Drinks.map((drink, index) => (
        <div className="drink-card" key={ index }>
          <img
            className="img-card"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <p>{drink.strDrink}</p>
          <Link to={`${drink.idDrink}`}>Detalhes</Link>
        </div>
      ))}
    </div>
    )
  }, [Drinks])

  return (
    <div>{handleDrinks()}</div>
  );
}