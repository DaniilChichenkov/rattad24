/* eslint-disable no-irregular-whitespace */
import React, { useState, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import langStore from "../stores/langStore";
import refsStorage from "../stores/refsStore";

import smallScreenServicesArray from "../content/servicesContentSmallScreen";
import mediumScreenServicesArray from "../content/servicesContentMediumScreen";
import largeScreenServicesArray from "../content/servicesContentLargeScreen";

const Services = observer(() => {
  const [width, setWidth] = useState(window.innerWidth);

  let refsArray;

  if (width < 768) {
    refsArray = smallScreenServicesArray.map(() => React.createRef());
  } else if (width >= 768 && width < 1024) {
    refsArray = {};

    mediumScreenServicesArray.forEach((col, colIndex) => {
      let colArr = [];

      col.forEach(() => {
        colArr.push(React.createRef());
      });

      refsArray[colIndex] = colArr;
    });
  } else {
    refsArray = {};

    largeScreenServicesArray.forEach((col, colIndex) => {
      let colArr = [];

      col.forEach(() => {
        colArr.push(React.createRef());
      });

      refsArray[colIndex] = colArr;
    });
  }

  const refs = useRef(refsArray);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const ctaClick = (key) => {
    console.log(key);
    const elRef = refsStorage.getRef(key);
    if (elRef) {
      elRef.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  //Get current language
  const lang = langStore.getLanguage();

  const handleSmallScreenClick = (e, i) => {
    setTimeout(() => {
      if (refs.current[i].current && e.target === refs.current[i].current) {
        console.log(refs.current[i].current);
        refs.current[i].current.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest",
        });
      }
    }, 105);
  };

  const handleLargeScreenClick = (e, colI, itemI) => {
    setTimeout(() => {
      if (
        refs.current[colI][itemI].current &&
        e.target === refs.current[colI][itemI].current
      ) {
        console.log(refs.current[colI][itemI].current);
        refs.current[colI][itemI].current.scrollIntoView({
          behavior: "auto",
          block: "start",
          inline: "nearest",
        });
      }
    }, 200);
  };

  return (
    <section
      ref={(node) => refsStorage.setRef("services", node)}
      className="w-full h-auto flex flex-col items-start justify-start gap-8 px-2 md:px-6 py-8"
    >
      <div className="font-bold text-2xl">
        {lang === "rus" ? (
          <>Наши услуги</>
        ) : lang === "est" ? (
          <>Meie teenused</>
        ) : (
          <>Palvelumme</>
        )}
      </div>

      {/* List  */}
      {width < 768 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {smallScreenServicesArray.map((item, i) => (
            <div
              key={i}
              className="collapse bg-base-200 collapse-arrow rounded-none transition-all duration-100 ease-in-out"
            >
              <input
                ref={refs.current[i]}
                onClick={(e) => {
                  handleSmallScreenClick(e, i);
                }}
                type="radio"
                name="services"
              />
              <div className="collapse-title text-xl font-medium">
                {lang === "est"
                  ? item.titleEst
                  : lang === "fin"
                  ? item.titleFin
                  : item.titleRus}
              </div>
              <div className="collapse-content">
                <img src={item.img} alt="" />
                <p className="mt-4">
                  {lang === "est"
                    ? item.descriptionEst
                    : lang === "fin"
                    ? item.descriptionFin
                    : item.descriptionRus}
                </p>
                <div
                  tabIndex={0}
                  className="collapse bg-base-200 mt-4 transition-all duration-100 ease-in-out"
                >
                  <input type="checkbox" name="services-description" />
                  <div className="collapse-title text-lg font-normal px-0 underline">
                    {lang === "est" ? (
                      <>Rohkem infot</>
                    ) : lang === "fin" ? (
                      <>Lisätietoja</>
                    ) : (
                      <>Подробнее</>
                    )}
                  </div>
                  <div className="collapse-content px-0 overflow-scroll">
                    {lang === "est"
                      ? item.additionalDescriptionEst
                      : lang === "fin"
                      ? item.additionalDescriptionFin
                      : item.additionalDescriptionRus}
                  </div>
                </div>
                <button
                  onClick={() => ctaClick("form")}
                  className="btn btn-primary mt-6"
                >
                  {lang === "rus" ? (
                    <>Забронировать визит</>
                  ) : lang === "est" ? (
                    <>Broneeri visiit.</>
                  ) : (
                    <>Varaa käynti.</>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : width >= 768 && width < 1024 ? (
        <div className="w-full h-auto flex justify-between items-start gap-4">
          {mediumScreenServicesArray.map((col, colIndex) => {
            return (
              <div
                key={`col-${colIndex}`}
                className="w-6/12 h-auto flex flex-col items-center justify-between gap-4"
              >
                {col.map((item, i) => (
                  <div
                    key={i}
                    className="collapse bg-base-200 collapse-arrow rounded-none"
                  >
                    <input
                      ref={refs.current[colIndex][i]}
                      onClick={(e) => {
                        handleLargeScreenClick(e, colIndex, i);
                      }}
                      type="radio"
                      name="services"
                    />
                    <div className="collapse-title text-xl font-medium">
                      {lang === "est"
                        ? item.titleEst
                        : lang === "fin"
                        ? item.titleFin
                        : item.titleRus}
                    </div>
                    <div className="collapse-content">
                      <img src={item.img} alt="" />
                      <p className="mt-3">
                        {lang === "est"
                          ? item.descriptionEst
                          : lang === "fin"
                          ? item.descriptionFin
                          : item.descriptionRus}
                      </p>
                      <div
                        tabIndex={0}
                        className="collapse bg-base-200 mt-4 transition-all duration-100 ease-in-out"
                      >
                        <input type="checkbox" name="services-description" />
                        <div className="collapse-title text-lg font-normal px-0 underline">
                          {lang === "est" ? (
                            <>Rohkem infot</>
                          ) : lang === "fin" ? (
                            <>Lisätietoja</>
                          ) : (
                            <>Подробнее</>
                          )}
                        </div>
                        <div className="collapse-content px-0 overflow-scroll">
                          {lang === "est"
                            ? item.additionalDescriptionEst
                            : lang === "fin"
                            ? item.additionalDescriptionFin
                            : item.additionalDescriptionRus}
                        </div>
                      </div>
                      <button
                        onClick={() => ctaClick("form")}
                        className="btn btn-primary"
                      >
                        {lang === "rus" ? (
                          <>Забронировать визит</>
                        ) : lang === "est" ? (
                          <>Broneeri visiit.</>
                        ) : (
                          <>Varaa käynti.</>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex justify-between items-start gap-4">
          {largeScreenServicesArray.map((col, colIndex) => (
            <div
              key={`col-${colIndex}`}
              className="w-6/12 h-auto flex flex-col items-center justify-between gap-4"
            >
              {col.map((item, i) => (
                <div
                  key={i}
                  className="collapse bg-base-200 collapse-arrow rounded-none"
                >
                  <input
                    ref={refs.current[colIndex][i]}
                    onClick={(e) => {
                      handleLargeScreenClick(e, colIndex, i);
                    }}
                    type="radio"
                    name="services"
                  />
                  <div className="collapse-title text-xl font-medium">
                    {lang === "est"
                      ? item.titleEst
                      : lang === "fin"
                      ? item.titleFin
                      : item.titleRus}
                  </div>
                  <div className="collapse-content">
                    <img src={item.img} alt="" />
                    <p className="mt-3">
                      {lang === "est"
                        ? item.descriptionEst
                        : lang === "fin"
                        ? item.descriptionFin
                        : item.descriptionRus}
                    </p>
                    <div
                      tabIndex={0}
                      className="collapse bg-base-200 mt-4 transition-all duration-100 ease-in-out"
                    >
                      <input type="checkbox" name="services-description" />
                      <div className="collapse-title text-lg font-normal px-0 underline">
                        {lang === "est" ? (
                          <>Rohkem infot</>
                        ) : lang === "fin" ? (
                          <>Lisätietoja</>
                        ) : (
                          <>Подробнее</>
                        )}
                      </div>
                      <div className="collapse-content px-0 overflow-scroll">
                        {lang === "est"
                          ? item.additionalDescriptionEst
                          : lang === "fin"
                          ? item.additionalDescriptionFin
                          : item.additionalDescriptionRus}
                      </div>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => ctaClick("form")}
                    >
                      {lang === "rus" ? (
                        <>Забронировать визит</>
                      ) : lang === "est" ? (
                        <>Broneeri visiit.</>
                      ) : (
                        <>Varaa käynti.</>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </section>
  );
});

export default Services;
