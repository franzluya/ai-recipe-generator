
import React from "react";
import Recipe from "./Recipe";
import GetRecipe from "./GetRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  function submit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const showRecipe = () => setRecipeShown((prevShown) => !prevShown);

  const ingredientListItem = ingredients.map((ingredient) => (
    <li key={ingredient} className="mb-4 text-slate-800">
      <div className="flex items-center gap-4">
        {ingredient}
        <button className="text-sm text-rose-500 underline">Remove</button>
      </div>
    </li>
  ));

  return (
    <main className="mx-12 mt-16 flex min-h-screen flex-col lg:mx-80">
      <form
        action={submit}
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

      <section className="mt-6">
        {ingredients.length > 0 && (
          <h2 className="mb-6 text-xl font-bold">Added Ingredients:</h2>
        )}
        <ul className="list-outside list-disc pl-5">{ingredientListItem}</ul>
        {ingredients.length > 3 && <GetRecipe handleClick={showRecipe} />}
      </section>
      {recipeShown && <Recipe />}
    </main>
  );
}
