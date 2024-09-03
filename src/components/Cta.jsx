import { observer } from "mobx-react-lite";

import sideMenuStore from "../stores/sideMenuStore";
import refsStorage from "../stores/refsStore";
import langStore from "../stores/langStore";

import headerImage from "../assets/1.jpeg";

const Cta = observer(() => {
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
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right lg:flex lg:flex-col lg:">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl md:text-left">
            {currentLang === "rus" ? (
              <>Запишись на бесплатную проверку своего автомобиля</>
            ) : currentLang === "est" ? (
              <>Registreeru oma auto tasuta kontrolliks.</>
            ) : (
              <>Varaa aika ilmaiseen autosi tarkastukseen.</>
            )}
          </h2>

          {/* <p className="hidden text-gray-500 md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p> */}

          <div className="mt-4 md:mt-8 md:text-left">
            <button
              onClick={() => handleClick("form")}
              className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              {currentLang === "rus" ? (
                <>Забронировать визит</>
              ) : currentLang === "est" ? (
                <>Broneeri visiit.</>
              ) : (
                <>Varaa käynti.</>
              )}
            </button>
          </div>
        </div>
      </div>

      <img
        alt=""
        src={headerImage}
        className="h-56 w-full object-cover sm:h-full"
      />
    </section>
  );
});

export default Cta;
