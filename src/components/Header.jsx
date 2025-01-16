import chefIcon from "/src/assets/header-logo.png"
export default function Header() {
  return (
    <header className="flex h-20 items-center justify-center gap-3 shadow-md">
      <img className="w-12 h-14" src={chefIcon} alt="Chef logo" />
      <h1 className="text-2xl">Chef Claude</h1>
    </header>
  );
}
