import React from "react";

export default function Header() {
  return (
    <header className="flex h-24 items-center justify-center gap-3 shadow-md">
      <img className="w-14" src="/src/assets/header-logo.png" alt="Chef logo" />
      <h1 className="text-3xl">Chef Claude</h1>
    </header>
  );
}
