import { observer } from "mobx-react-lite";

import sideMenuStore from "../stores/sideMenuStore";
import refsStorage from "../stores/refsStore";
import langStore from "../stores/langStore";

import logo from "../assets/logo.png";

const SideMenu = observer(() => {
  const currentLang = langStore.getLanguage();

  const handleClick = (key) => {
    sideMenuStore.sideMenuOpened = false;
    const elRef = refsStorage.getRef(key);
    if (elRef) {
      elRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`flex h-screen flex-col justify-between border-e bg-white z-20 fixed inset-0 transition-transform  ${
        sideMenuStore.sideMenuState ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-4 py-6">
        <div className="flex justify-between items-ctner">
          <span className="grid h-10 w-32 place-content-center  ">
            <img className="rotate-90 w-16" src={logo} alt="Logo image" />
          </span>

          <button
            onClick={() => {
              sideMenuStore.sideMenuOpened = false;
            }}
            className="btn btn-outline fa-solid fa-x"
          ></button>
        </div>

        <ul className="mt-6 space-y-6">
          {/* About us section */}
          <li>
            <button
              onClick={() => handleClick("about")}
              className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium"
            >
              <p className="w-full text-left">
                {currentLang === "rus" ? (
                  <>О нас</>
                ) : currentLang === "est" ? (
                  <>Meist</>
                ) : (
                  <>Meistä</>
                )}
              </p>
            </button>
          </li>

          {/* Form  */}
          <li>
            <button
              onClick={() => handleClick("form")}
              className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium"
            >
              <p className="w-full text-left">
                {currentLang === "rus" ? (
                  <>Забронировать визит</>
                ) : currentLang === "est" ? (
                  <>Broneeri visiit</>
                ) : (
                  <>Varaa käynti</>
                )}
              </p>
            </button>
          </li>

          {/* Contacts */}
          <li>
            <button
              onClick={() => handleClick("services")}
              className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium"
            >
              <p className="w-full text-left">
                {currentLang === "rus" ? (
                  <>Наши услуги</>
                ) : currentLang === "est" ? (
                  <>Meie teenused</>
                ) : (
                  <>Palvelumme</>
                )}
              </p>
            </button>
          </li>

          {/* Contacts */}
          <li>
            <button
              onClick={() => handleClick("contacts")}
              className="btn btn-ghost bg-base-200 w-full rounded-lg text-xl font-medium"
            >
              <p className="w-full text-left">
                {currentLang === "rus" ? (
                  <>Контакты</>
                ) : currentLang === "est" ? (
                  <>Kontaktid</>
                ) : (
                  <>Yhteystiedot</>
                )}
              </p>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default SideMenu;
