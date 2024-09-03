import { observer } from "mobx-react-lite";

import refsStorage from "../stores/refsStore";
import langStore from "../stores/langStore";

const Footer = observer(() => {
  const currentLang = langStore.getLanguage();

  const handleClick = (key) => {
    const elRef = refsStorage.getRef(key);
    if (elRef) {
      elRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
          <li>
            <button
              className="text-gray-700 transition hover:text-gray-700/75"
              onClick={() => handleClick("about")}
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
              onClick={() => handleClick("contacts")}
              className="text-gray-700 transition hover:text-gray-700/75"
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
              className="text-gray-700 transition hover:text-gray-700/75"
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

          <li>
            <button
              className="text-gray-700 transition hover:text-gray-700/75"
              onClick={() => handleClick("form")}
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
        </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <a
              href="https://www.facebook.com/rehvid.autoremont"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition scale-125 hover:text-gray-700/75 fa-brands fa-facebook"
            >
              {/* <span className="sr-only">Facebook</span> */}
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/rattad24?igsh=ZGN3Z2d1bG9sYzAy&utm_source=qr"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition scale-125 hover:text-gray-700/75 fa-brands fa-instagram"
            >
              {/* <span className="sr-only">Instagram</span> */}
            </a>
          </li>

          <li>
            <a
              href="https://www.tiktok.com/@rattad24?_t=8on3UR6h9t3&_r=1"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition scale-125 hover:text-gray-700/75 fa-brands fa-tiktok"
            >
              {/* <span className="sr-only">Instagram</span> */}
            </a>
          </li>

          <li>
            <a
              href="https://youtube.com/@rattad24.?feature=shared"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition scale-125 hover:text-gray-700/75 fa-brands fa-youtube"
            >
              {/* <span className="sr-only">Instagram</span> */}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
});

export default Footer;
