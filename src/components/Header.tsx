import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../constants";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
      const uid = user.uid;
      console.log(uid);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <header className="w-full h-20 flex items-center">
      <div className="container mx-auto max-w-8xl flex items-center justify-between px-6">
        <h1 className="font-semibold text-xl">Todo</h1>

        {isLoggedIn ? (
          <button
            onClick={() => {
              logout();
              window.location.href = "/auth/login";
            }}
          >
            logout
          </button>
        ) : (
          <Link
            to="/auth/signup"
            className="p-2 font-medium text-sm rounded bg-[#de483a]"
          >
            start for free
          </Link>
        )}
      </div>
    </header>
  );
}
