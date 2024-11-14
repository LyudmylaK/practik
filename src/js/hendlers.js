import { getAllRecipeById, getAllRecipes } from './dummyJSON-API';
import { openModal } from './modal';
import { renderRecipes } from './render-function';

export async function onDOMLoaded() {
  try {
    const { recipes } = await getAllRecipes();

    renderRecipes(recipes);
  } catch (error) {
    console.log(error);
  }
}

export async function onRecipesListClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  try {
    const id = event.target.dataset.id;
    const recipe = await getAllRecipeById(id);
    openModal();
  } catch (error) {
    console.log(error);
  }
}
