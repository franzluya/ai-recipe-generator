import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient")?.toString() || "";
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const ingredientListItem = ingredients.map((ingredient) => (
    <li key={ingredient} className="text-slate-600 mb-4">
      {ingredient}
    </li>
  ));

  return (
    <main className="mx-8 mt-16 w-full">
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mx-auto">
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

      <div className="mt-6">
        {ingredientListItem.length >= 1 ? <h2 className="mb-6 text-xl font-bold">Added Ingredients List</h2> : <p></p>}
        <ul className="list-outside list-disc pl-5">{ingredientListItem}</ul>
      </div>
    </main>
  );
}
