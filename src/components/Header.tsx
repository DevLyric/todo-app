import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-20 flex items-center">
      <div className="container mx-auto max-w-8xl flex items-center justify-between px-6">
        <h1 className="font-semibold text-xl">Todo</h1>
        <Link
          to="/auth/signup"
          className="p-2 font-medium text-sm rounded bg-[#de483a]"
        >
          Comece de graça
        </Link>
      </div>
    </header>
  );
}
