import { observer } from "mobx-react-lite";

import sideMenuStore from "../stores/sideMenuStore";
import langStore from "../stores/langStore";

import logo from "../assets/logo.png";

const Navigation = observer(() => {
  return (
    <header className="bg-white z-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <img className="w-16 rotate-90 ml-4" src={logo} alt="Logo image" />

        <div className="flex flex-1 items-center justify-end md:gap-10">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  About us{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Form{" "}
                </a>
              </li>
              <li>
                <a
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="#"
                >
                  {" "}
                  Contacts{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 relative">
            {/* Language selection */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                {langStore.getLanguage()}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow gap-y-4"
              >
                <li>
                  <button
                    onClick={() => {
                      langStore.setLanguage = "est";
                    }}
                    className={`btn btn-${
                      langStore.getLanguage() === "est" ? "primary" : "outline"
                    }`}
                  >
                    est
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      langStore.setLanguage = "fin";
                    }}
                    className={`btn btn-${
                      langStore.getLanguage() === "fin" ? "primary" : "outline"
                    }`}
                  >
                    fin
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      langStore.setLanguage = "rus";
                    }}
                    className={`btn btn-${
                      langStore.getLanguage() === "rus" ? "primary" : "outline"
                    }`}
                  >
                    rus
                  </button>
                </li>
              </ul>
            </div>
            {/* Side menu */}
            <button
              onClick={() => {
                sideMenuStore.sideMenuOpened = true;
              }}
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Navigation;
