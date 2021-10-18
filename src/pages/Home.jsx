import React, { useContext } from 'react';
import DrinkList from '../components/DrinkList';
import SearchInput from '../components/SearchInput';
import DrinksContext from '../context/DrinksContext';

export default function Home() {
  return (
    <>
      <SearchInput />
      <DrinkList />
    </>
  );
}
