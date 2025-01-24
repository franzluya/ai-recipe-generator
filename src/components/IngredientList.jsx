/* eslint-disable react/prop-types */
export default function IngredientList(props) {
  const ingredientListItem = props.ingredients.map((ingredient, index) => (
    <li key={index} className="mb-4 text-slate-800">
      <div className="flex items-center gap-4">
        {ingredient}
        <button
          onClick={() => props.removeIngredient(index)}
          className="text-sm text-rose-500 underline"
        >
          Remove
        </button>
      </div>
    </li>
  ));
  return props.ingredients.length === 0 ? (
    <h2 className="mt-10 border border-slate-300 px-6 py-24 rounded-lg text-center text-lg text-slate-400">
      Add at least 4 ingredients to generate a recipe
    </h2>
  ) : (
    <section className="mt-6">
      <h2 className="mb-6 text-xl font-bold">Added Ingredients:</h2>
      <ul className="list-outside list-disc pl-5">{ingredientListItem}</ul>
      {props.ingredients.length > 3 && (
        <div
          ref={props.ref}
          className="mt-8 flex flex-wrap justify-between gap-4 rounded-md bg-gray-200 px-10 py-8 shadow"
        >
          <div>
            <h3 className="text-xl font-bold">Ready for a recipe?</h3>
            <p className="text-sm text-gray-600">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button
            onClick={props.getRecipe}
            className="grow-0 rounded-md bg-slate-800 px-6 py-2 text-gray-50 shadow ease-in-out hover:bg-slate-600 hover:text-gray-100"
          >
            {props.isLoading ? "Generating..." : "Get a recipe"}
          </button>
        </div>
      )}
    </section>
  );
}
