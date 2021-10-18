const Error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function fetchDrinksByIngredient(type) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`);
    return await response.json();
  } catch (e) {
    return global.alert(Error);
  }
}
export async function fetchDrinksByName(type) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`);
    return await response.json();
  } catch (e) {
    return global.alert(Error);
  }
}
export async function fetchDrinksByFirstLetter(type) {
  if (type.length > 1) global.alert('Sua busca deve conter somente 1 (um) caracter');
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${type}`);
    return await response.json();
  } catch (e) {
    return global.alert(Error);
  }
}
export function fetchInitialDrinks() {
  return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((response) => response.json())
    .then((response) => response.drinks)
}
