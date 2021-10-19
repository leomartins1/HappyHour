import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchDrinksDetails } from '../services/fetchCocktails'


export default function Details() {
  const { id } = useParams();
  const [state, setState] = useState({ details:{}, needed: { ingredients: [], measure:[] }, loading: true });

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetchDrinksDetails(id);
      const details = data.drinks[0];
      const { ingredients, measure } = await getIngredientsAndMeasure(data.drinks[0]);
      setState({ ...state, details, loading: false, needed: { ingredients, measure } });
    }

    fetchDetails();
  }, [id, state]);

  const getIngredientsAndMeasure = (object) => {
    const keys = Object.keys(object);
    const ingredients = keys.reduce((acc, key) => {
      if (key.includes('strIngredient') && object[key]) {
        acc = [...acc, object[key]];
      }
      return acc;
    }, []);
    const measure = keys.reduce((acc, key) => {
      if (key.includes('strMeasure') && object[key]) {
        acc = [...acc, object[key]];
      }
      return acc;
    }, []);
    return { ingredients, measure };
  };

  function handleIngredients() {
    const ingredientsList = state.needed.ingredients
      .map((ingredient, index) => (
        <li key={ index }>
          { `${ingredient} ${state.needed.measure[index] || ''}` }
        </li>
      ));
    return ingredientsList;
  }

  function handleDetails() {
    const { strDrinkThumb, strCategory,
      strDrink, strInstructions, strAlcoholic } = state.details;
    return (
      <div className="details">
        <img
          className="img-details"
          data-testid="recipe-photo"
          alt={ strDrink }
          src={ `${strDrinkThumb}` }
        />
        <p data-testid="recipe-title">{ strDrink }</p>
        <p data-testid="recipe-category">{strAlcoholic}</p>
        <p data-testid="recipe-category">{`Category: ${strCategory}`}</p>
        { handleIngredients() }
        <p data-testid="instructions">{`Instructions: ${strInstructions}`}</p>
        <Link className="back-btn" to='/'>Voltar para o Pub</Link>
      </div>
    );
  }
    
  return (
    <div className="details-page">
      { state.loading || handleDetails() }
    </div>
  );
}
