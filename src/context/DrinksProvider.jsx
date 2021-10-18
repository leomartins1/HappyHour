import React, { useEffect, useState } from 'react';
import DrinksContext from './DrinksContext';

export function DrinksProvider({ children }) {
  const [initialDrinks, setInitialDrinks] = useState([]);
  
  const contextValue = {
    initialDrinks,
  };

  return(
    <DrinksContext.Provider
      value={ { contextValue } }
    >
      {children}
    </DrinksContext.Provider>
  )
}