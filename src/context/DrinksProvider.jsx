import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DrinksContext from './DrinksContext';
import { fetchInitialDrinks } from '../services/fetchCocktails';

function DrinksProvider({ children }) {
  const [Drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitialDrinks();
      setDrinks(data);
    }

    fetchData();
  }, [])
  
  const contextValue = {
    Drinks,
    setDrinks,
  };

  return (
    <DrinksContext.Provider
      value={ { contextValue } }
    >
      {children}
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DrinksProvider;
