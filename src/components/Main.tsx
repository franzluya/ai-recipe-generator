import React from "react";

export default function Main() {
	return (
		<main className="flex justify-center flex-col items-center mt-16 mx-8 w-full">
			<form className="flex flex-wrap gap-4">
				<input
					className="border text-normal border-gray-400 rounded shadow-sm sm:grow min-w-[300px] max-w-[500px] px-3 py-2"
					type="text"
					placeholder="e.g. Egg"
				/>
				<button className=" bg-slate-800 shadow-md text-gray-50 px-6 py-2 rounded hover:bg-slate-600 hover:text-gray-100 ease-in-out">+ Add Ingredient</button>
			</form>
		</main>
	);
}
