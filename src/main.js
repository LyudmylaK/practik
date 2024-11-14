import { onDOMLoaded, onRecipesListClick } from './js/hendlers';
import { refs } from './js/refs';

document.addEventListener('DOMContentLoaded', onDOMLoaded);
refs.recipesList.addEventListener('click', onRecipesListClick);
