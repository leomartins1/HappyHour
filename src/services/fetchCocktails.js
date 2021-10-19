const Error = 'Sinto muito, não encontramos nenhuma receita para esses filtros.';

export async function fetchDrinksByIngredient(type) {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${type}`);
    const response_1 = await response.json();
    return response_1.drinks;
  } catch (e) {
    return global.alert(Error);
  }
}

export async function fetchDrinksByName(type) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${type}`);
    const response_1 = await response.json();
    if(response_1.drinks === null ) return global.alert(Error);
    return response_1.drinks;
}

export async function fetchDrinksByFirstLetter(type) {
  if (type.length > 1) return global.alert('Sua busca deve conter somente 1 (um) caracter');
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${type}`);
    const response_1 = await response.json();
    return response_1.drinks;
  } catch (e) {
    return global.alert(Error);
  }
}

export async function fetchInitialDrinks() {
  const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response_1 = await response.json();
  return response_1.drinks;
}

export async function fetchDrinksDetails(id) {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  return await response.json();
}
