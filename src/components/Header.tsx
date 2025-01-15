import React from "react";

export default function Header() {
	return (
		<header className="flex justify-center items-center gap-3 h-24 shadow-md">
			<img className="w-14" src="/src/assets/header-logo.png" alt="Chef logo" />
			<h1
				className="text-3xl
      "
			>
				Chef Claude
			</h1>
		</header>
	);
}
