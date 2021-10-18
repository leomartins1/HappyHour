import React, { useContext } from 'react';
import DrinksContext from '../context/DrinksContext';

export default function DrinkList() {
  const { contextValue } = useContext(DrinksContext);
  const { Drinks } = contextValue;
  return (
    <div className="home">
      {Drinks.map((drink) => (
        <div className="drink-card">
          <img
            className="img-card"
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
          />
          <p>{drink.strDrink}</p>
          <p>{drink.idDrink}</p>
        </div>
      ))}
    </div>
  );
}