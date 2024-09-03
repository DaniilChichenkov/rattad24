import { observer } from "mobx-react-lite";
import { useState } from "react";

import sideMenuStore from "../stores/sideMenuStore";
import langStore from "../stores/langStore";
import refsStorage from "../stores/refsStore";

import logo from "../assets/logo.png";

const Navigation = observer(() => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const currentLang = langStore.getLanguage();

  const toggleDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  const handleClick = (key) => {
    const elRef = refsStorage.getRef(key);
    if (elRef) {
      elRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="bg-white z-10">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <img className="w-16 rotate-90 ml-4" src={logo} alt="Logo image" />
        <a href="tel:+37253540737" className="btn btn-primary">
          <i className="fa-solid fa-phone"></i>
        </a>

        <div className="flex flex-1 items-center justify-end md:gap-10">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <button
                  onClick={() => {
                    handleClick("about");
                  }}
                  className="text-gray-500 transition hover:text-gray-500/75"
                >
                  {currentLang === "rus" ? (
                    <>О нас</>
                  ) : currentLang === "est" ? (
                    <>Meist</>
                  ) : (
                    <>Meistä</>
                  )}
                </button>
              </li>
              <li>
                <button
                  className="text-gray-500 transition hover:text-gray-500/75"
                  onClick={() => {
                    handleClick("form");
                  }}
                >
                  {currentLang === "rus" ? (
                    <>Забронировать визит</>
                  ) : currentLang === "est" ? (
                    <>Broneeri visiit</>
                  ) : (
                    <>Varaa käynti</>
                  )}
                </button>
              </li>
              <li>
                <button
                  className="text-gray-500 transition hover:text-gray-500/75"
                  onClick={() => {
                    handleClick("contacts");
                  }}
                >
                  {currentLang === "rus" ? (
                    <>Контакты</>
                  ) : currentLang === "est" ? (
                    <>Kontaktid</>
                  ) : (
                    <>Yhteystiedot</>
                  )}
                </button>
              </li>
              <li>
                <button
                  className="text-gray-500 transition hover:text-gray-700/75"
                  onClick={() => handleClick("services")}
                >
                  {currentLang === "rus" ? (
                    <>Наши услуги</>
                  ) : currentLang === "est" ? (
                    <>Meie teenused</>
                  ) : (
                    <>Palvelumme</>
                  )}
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 relative">
            {/* Language selection */}
            <div className="relative">
              <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                <button onClick={toggleDropdown} className="btn btn-primary">
                  {langStore.getLanguage()}
                </button>
              </div>

              <div
                className={`absolute z-10 mt-2 w-20 rounded-md md:-ml-10  ${
                  langDropdownOpen ? "block" : "hidden"
                }`}
                role="menu"
              >
                <div className="p-2">
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-24 p-2 shadow gap-y-4"
                  >
                    <li>
                      <button
                        onClick={() => {
                          langStore.setLanguage = "est";
                          setLangDropdownOpen(false);
                        }}
                        id="lang-selection-btn"
                        className={`btn btn-${
                          langStore.getLanguage() === "est"
                            ? "primary"
                            : "outline"
                        }`}
                      >
                        est
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          langStore.setLanguage = "fin";
                          setLangDropdownOpen(false);
                        }}
                        id="lang-selection-btn"
                        className={`btn btn-${
                          langStore.getLanguage() === "fin"
                            ? "primary"
                            : "outline"
                        }`}
                      >
                        fin
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          langStore.setLanguage = "rus";
                          setLangDropdownOpen(false);
                        }}
                        id="lang-selection-btn"
                        className={`btn btn-${
                          langStore.getLanguage() === "rus"
                            ? "primary"
                            : "outline"
                        }`}
                      >
                        rus
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
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
