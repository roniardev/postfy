import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="fixed z-40 flex items-center justify-center w-full h-16 shadow-md bg-sky-500">
      <div className="flex items-center justify-between w-full h-full px-4 py-3 mx-auto sm:max-w-xl">
        <div className="bg-white px-2 py-1 shadow-md">
          <h1 class="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            Postfy
          </h1>
        </div>
      </div>
    </header>
  );
}
