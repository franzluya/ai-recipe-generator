/* eslint-disable react/prop-types */
export default function GetRecipe(props) {
  return <div className="mt-8 flex flex-wrap justify-between gap-4 rounded-md bg-gray-200 px-10 py-8 shadow">
    <div>
      <h3 className="text-xl font-bold">Ready for a recipe?</h3>
      <p className="text-sm text-gray-600">
        Generate a recipe from your list of ingredients.
      </p>
    </div>
    <button
      onClick={props.handleClick}
      className="grow-0 rounded-md bg-slate-800 px-6 py-2 text-gray-50 shadow ease-in-out hover:bg-slate-600 hover:text-gray-100"
    >
      Get a recipe
    </button>
  </div>
}