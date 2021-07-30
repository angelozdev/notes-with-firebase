import { Link } from "react-router-dom";
import { Routes } from "src/consts";

function Header() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content justify-between">
      <Link to={Routes.HOME}>
        <div className="flex-none px-2 mx-2">
          <span className="text-lg font-bold">DaisyUI</span>
        </div>
      </Link>

      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Header;
