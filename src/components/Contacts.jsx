import { observer } from "mobx-react-lite";
import { v4 as uuid } from "uuid";

import refsStorage from "../stores/refsStore";
import langStore from "../stores/langStore";

import locations from "../content/locations";

const Contacts = observer(() => {
  const currentLang = langStore.getLanguage();

  return (
    <section
      ref={(node) => refsStorage.setRef("contacts", node)}
      className="py-10 lg:px-10 lg:py-20"
    >
      <div className="w-full flex justify-start px-4">
        <p className="font-bold text-2xl lg:text-5xl">
          {currentLang === "rus" ? (
            <>Наши контакты</>
          ) : currentLang === "est" ? (
            <>Meie kontaktid</>
          ) : (
            <>Yhteystietomme</>
          )}
        </p>
      </div>

      {/* Finland contacts */}
      <article className="w-full h-auto mt-10 px-4">
        <div className="w-full flex justify-start items-center font-bold text-xl">
          {currentLang === "rus" ? (
            <>Финляндия</>
          ) : currentLang === "est" ? (
            <>Soome</>
          ) : (
            <>Suomi</>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-4">
          {locations.finland.map((place) => (
            <>
              <div key={uuid()}>
                <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <h2 className="mt-2 font-bold text-lg">{place.city}</h2>
                  <h2 className="mt-2 font-bold">{place.address}</h2>
                  <p className="mt-2">
                    {currentLang === "rus"
                      ? place.descriptionRus
                      : currentLang === "est"
                      ? place.descriptionEst
                      : place.descriptionFin}
                  </p>
                  <p className="sm:block sm:text-sm text-black font-bold mt-2">
                    {currentLang === "rus" ? (
                      <>Рабочие часы:</>
                    ) : currentLang === "est" ? (
                      <>Tööaeg:</>
                    ) : (
                      <>Työajat:</>
                    )}
                  </p>
                  <p className="w-5/12 flex justify-between">
                    {currentLang === "rus" ? (
                      <>Пн-Пт</>
                    ) : currentLang === "est" ? (
                      <>E-R</>
                    ) : (
                      <>M-P</>
                    )}
                    : <span>{place.hoursWeek}</span>
                  </p>
                  <p className="w-5/12 flex justify-between">
                    {currentLang === "rus" ? (
                      <>Сб</>
                    ) : currentLang === "est" ? (
                      <>L</>
                    ) : (
                      <>L</>
                    )}
                    :
                    <span>
                      {place.hoursSat ? (
                        place.hoursSat
                      ) : currentLang === "rus" ? (
                        <>Закрыто</>
                      ) : currentLang === "est" ? (
                        <>Suletud</>
                      ) : (
                        <>Suljettu</>
                      )}
                    </span>
                  </p>
                  <p className="w-5/12 flex justify-between">
                    {currentLang === "rus" ? (
                      <>В</>
                    ) : currentLang === "est" ? (
                      <>P</>
                    ) : (
                      <>S</>
                    )}
                    :
                    <span>
                      {place.hoursSun ? (
                        place.hoursSun
                      ) : currentLang === "rus" ? (
                        <>Закрыто</>
                      ) : currentLang === "est" ? (
                        <>Suletud</>
                      ) : (
                        <>Suljettu</>
                      )}
                    </span>
                  </p>

                  <p className="mt-2 sm:block sm:text-sm text-black font-bold">
                    {currentLang === "rus" ? (
                      <>Телефон</>
                    ) : currentLang === "est" ? (
                      <>Telefon</>
                    ) : (
                      <>Puhelin</>
                    )}
                    :
                  </p>
                  <p>{place.tel}</p>

                  <a className="btn btn-primary mt-4" href={place.url}>
                    {currentLang === "rus" ? (
                      <> Показать на карте</>
                    ) : currentLang === "est" ? (
                      <>Näita kaardil</>
                    ) : (
                      <>Näytä kartalla</>
                    )}
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </article>

      {/* Estonia contacts */}
      <article className="w-full h-auto mt-10 px-4">
        <div className="w-full flex justify-start items-center font-bold text-xl">
          {currentLang === "rus" ? (
            <>Эстония</>
          ) : currentLang === "est" ? (
            <>Eesti</>
          ) : (
            <>Viro</>
          )}
          :
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-4">
          {locations.estonia.map((place) => (
            <>
              <div key={uuid()} className="md:min-h-full">
                <div className="block md:flex md:flex-col md:items-start md:justify-between md:h-full rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <h2 className="mt-2 font-bold text-lg">{place.city}</h2>
                  <h2 className="mt-2 font-bold">{place.address}</h2>
                  <p className="mt-2">
                    {currentLang === "rus"
                      ? place.descriptionRus
                      : currentLang === "est"
                      ? place.descriptionEst
                      : place.descriptionFin}
                  </p>
                  <p className=" sm:block sm:text-sm text-black font-bold mt-2">
                    {currentLang === "rus" ? (
                      <>Рабочие часы:</>
                    ) : currentLang === "est" ? (
                      <>Tööaeg:</>
                    ) : (
                      <>Työajat:</>
                    )}
                  </p>
                  <p className="w-5/12 flex justify-between">
                    {currentLang === "rus" ? (
                      <>Пн-Пт</>
                    ) : currentLang === "est" ? (
                      <>E-R</>
                    ) : (
                      <>M-P</>
                    )}
                    : <span>{place.hoursWeek}</span>
                  </p>
                  <p className="w-5/12 flex justify-between">
                    {currentLang === "rus" ? (
                      <>Сб</>
                    ) : currentLang === "est" ? (
                      <>L</>
                    ) : (
                      <>L</>
                    )}
                    :
                    <span>
                      {place.hoursSat ? (
                        place.hoursSat
                      ) : currentLang === "rus" ? (
                        <>Закрыто</>
                      ) : currentLang === "est" ? (
                        <>Suletud</>
                      ) : (
                        <>Suljettu</>
                      )}
                    </span>
                  </p>
                  <p className="w-5/12 flex justify-between">
                    {currentLang === "rus" ? (
                      <>В</>
                    ) : currentLang === "est" ? (
                      <>P</>
                    ) : (
                      <>S</>
                    )}
                    :
                    <span>
                      {place.hoursSun ? (
                        place.hoursSun
                      ) : currentLang === "rus" ? (
                        <>Закрыто</>
                      ) : currentLang === "est" ? (
                        <>Suletud</>
                      ) : (
                        <>Suljettu</>
                      )}
                    </span>
                  </p>

                  <p className="mt-2 sm:block sm:text-sm text-black font-bold">
                    {currentLang === "rus" ? (
                      <>Телефон</>
                    ) : currentLang === "est" ? (
                      <>Telefon</>
                    ) : (
                      <>Puhelin</>
                    )}
                    :
                  </p>
                  <p>{place.tel}</p>

                  <a className="btn btn-primary mt-4" href={place.url}>
                    {currentLang === "rus" ? (
                      <> Показать на карте</>
                    ) : currentLang === "est" ? (
                      <>Näita kaardil</>
                    ) : (
                      <>Näytä kartalla</>
                    )}
                  </a>
                </div>
              </div>
            </>
          ))}
        </div>
      </article>
    </section>
  );
});

export default Contacts;
