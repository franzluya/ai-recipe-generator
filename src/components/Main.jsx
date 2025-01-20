import React from "react";
import IngredientList from "./IngredientList";
import Recipe from "./Recipe";
import { getRecipeFromMistral } from "../ai.js";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }
  const [recipe, setRecipe] = React.useState("");

  React.useEffect(() => {
    if (recipe && recipeSection) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  const recipeSection = React.useRef(null);

  async function getRecipe() {
    setLoading(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setLoading(false);
  }

  function removeIngredient(indexToRemove) {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((_, index) => index !== indexToRemove),
    );
  }

  return (
    <main className="mx-8 mt-16 flex flex-grow flex-col md:mx-24 xl:mx-80">
      <form
        action={addIngredient}
        className="mx-auto flex w-full flex-wrap justify-center gap-4"
      >
        <input
          className="text-normal min-w-[300px] max-w-[500px] rounded border border-gray-400 px-3 py-2 shadow-sm sm:grow"
          type="text"
          name="ingredient"
          placeholder="e.g. Egg"
          required
        />
        <button className="rounded bg-slate-800 px-6 py-2 text-gray-50 shadow-md ease-in-out hover:bg-slate-600 hover:text-gray-100">
          + Add Ingredient
        </button>
      </form>

      {ingredients.length > 0 && (
        <IngredientList
          ref={recipeSection}
          ingredients={ingredients}
          removeIngredient={removeIngredient}
          getRecipe={getRecipe}
        />
      )}
      {loading ? (
        <div>
          <Skeleton
            height={20}
            width={200}
            style={{ marginBottom: "16px", marginTop: "18px" }}
          />
          <Skeleton height={50} width={500} style={{ marginBottom: "16px" }} />
          <Skeleton height={20} count={5} style={{ marginBottom: "12px" }} />

          <Skeleton height={30} style={{ marginTop: "12px" }} />

          <Skeleton height={10} count={5} style={{ marginBottom: "12px" }} />
          <Skeleton height={40} style={{ marginTop: "8px" }} />
          <Skeleton height={10} count={5} style={{ marginBottom: "12px" }} />
        </div>
      ) : (
        recipe && <Recipe recipe={recipe} />
      )}
    </main>
  );
}
