import React from "react";
import IngredientList from "./IngredientList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  const [recipe, setRecipe] = React.useState("");

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    console.log(recipeMarkdown);
    setRecipe(recipeMarkdown);
  }

  // function removeIngredient(id) {
  //   setIngredients;
  // }
  return (
    <main className="mx-8 mt-16 flex min-h-screen flex-col md:mx-24 xl:mx-80">
      <form
        action={addIngredient}
        className="mx-auto flex w-full flex-wrap justify-center gap-4"
      >
        <input
          className="text-normal min-w-[300px] max-w-[500px] rounded border border-gray-400 px-3 py-2 shadow-sm sm:grow"
          type="text"
          name="ingredient"
          placeholder="e.g. Egg"
        />
        <button className="rounded bg-slate-800 px-6 py-2 text-gray-50 shadow-md ease-in-out hover:bg-slate-600 hover:text-gray-100">
          + Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientList
          ingredients={ingredients}
          // removeIngredient={removeIngredient}
          getRecipe={getRecipe}
        />
      )}

      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
