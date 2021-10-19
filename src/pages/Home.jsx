import React from 'react';
import DrinkList from '../components/DrinkList';
import SearchInput from '../components/SearchInput';

export default function Home() {
  return (
    <>
      <SearchInput />
      <DrinkList />
    </>
  );
}
