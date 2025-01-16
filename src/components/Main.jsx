import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  function submit(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const showRecipe = () => setRecipeShown(prevShown => !prevShown);

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
        {ingredients.length > 3 && (
          <div className="mt-8 flex flex-wrap justify-between gap-4 rounded-md bg-gray-200 px-10 py-8 shadow">
            <div>
              <h3 className="text-xl font-bold">Ready for a recipe?</h3>
              <p className="text-sm text-gray-600">
                Generate a recipe from your list of ingredients.
              </p>
            </div>
            <button
              onClick={showRecipe}
              className="grow-0 rounded-md bg-slate-800 px-6 py-2 text-white shadow"
            >
              Get a recipe
            </button>
          </div>
        )}
      </section>
      {recipeShown && (
        <section className="my-10">
          <h2 className="text-2xl font-bold mb-4">Chef Claude Recommends:</h2>
          <article className="text-gray-600" aria-live="polite">
            <p className="mb-10">
              Based on the ingredients you have available, I would recommend
              making a simple a delicious <strong>Beef Bolognese Pasta</strong>.
              Here is the recipe:
            </p>
            <h3 className="font-bold text-xl my-4">Beef Bolognese Pasta</h3>
            <strong className="text-lg mb-6">Ingredients:</strong>
            <ul className="list-disc list-inside">
              <li className="my-4">1 lb. ground beef</li>
              <li>1 onion, diced</li>
              <li>3 cloves garlic, minced</li>
              <li>2 tablespoons tomato paste</li>
              <li>1 (28 oz) can crushed tomatoes</li>
              <li>1 cup beef broth</li>
              <li>1 teaspoon dried oregano</li>
              <li>1 teaspoon dried basil</li>
              <li>Salt and pepper to taste</li>
              <li>
                8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
              </li>
            </ul>
            <strong className="text-lg">Instructions:</strong>
            <ol className="my-4 list-decimal list-inside">
              <li>
                Bring a large pot of salted water to a boil for the pasta.
              </li>
              <li>
                In a large skillet or Dutch oven, cook the ground beef over
                medium-high heat, breaking it up with a wooden spoon, until
                browned and cooked through, about 5-7 minutes.
              </li>
              <li>
                Add the diced onion and minced garlic to the skillet and cook
                for 2-3 minutes, until the onion is translucent.
              </li>
              <li>Stir in the tomato paste and cook for 1 minute.</li>
              <li>
                Add the crushed tomatoes, beef broth, oregano, and basil. Season
                with salt and pepper to taste.
              </li>
              <li>
                Reduce the heat to low and let the sauce simmer for 15-20
                minutes, stirring occasionally, to allow the flavors to meld.
              </li>
              <li>
                While the sauce is simmering, cook the pasta according to the
                package instructions. Drain the pasta and return it to the pot.
              </li>
              <li>
                Add the Bolognese sauce to the cooked pasta and toss to combine.
              </li>
              <li>
                Serve hot, garnished with additional fresh basil or grated
                Parmesan cheese if desired.
              </li>
            </ol>
          </article>
        </section>
      )}
    </main>
  );
}
