import { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import testImg from "../assets/HeaderImage.jpg";
import polishingImage from "../assets/polishing.jpg";
import repairImage from "../assets/repair.jpg";
import diagnosticsImage from "../assets/diagnostics.jpg";
import electric from "../assets/electric.jpg";
import transmission from "../assets/transmission.jpg";
import welding from "../assets/welding.jpg";
import conditioner from "../assets/conditioner.jpg";
import dents from "../assets/dents.jpg";
import oil from "../assets/oil.jpg";
import tire from "../assets/tire.jpg";
import tireWorks from "../assets/tire-works.jpg";
import tuning from "../assets/tuning.jpg";
import parts from "../assets/parts.jpg";
import paint from "../assets/paint.jpg";
import disk from "../assets/disk.jpg";

import langStore from "../stores/langStore";

const smallScreenServicesArray = [
  {
    titleRus: "Полировка автомобиля",
    titleEst: "Polirovka est",
    titleFin: "Polirovka fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: polishingImage,
  },
  {
    titleRus: "Ремонт и обслуживание",
    titleEst: "Ремонт и обслуживание est",
    titleFin: "Ремонт и обслуживание fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: repairImage,
  },
  {
    titleRus: "Тюнинг и рестайлинг",
    titleEst: "Тюнинг и рестайлинг est",
    titleFin: "Тюнинг и рестайлинг fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: tuning,
  },
  {
    titleRus: "Диагностика",
    titleEst: "Диагностика est",
    titleFin: "Диагностика fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: diagnosticsImage,
  },
  {
    titleRus: "Ремонт электроники",
    titleEst: "Ремонт электроники est",
    titleFin: "Ремонт электроники fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: electric,
  },
  {
    titleRus: "Ремонт коробки передач",
    titleEst: "Ремонт коробки передач est",
    titleFin: "Ремонт коробки передач fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: transmission,
  },
  {
    titleRus: "Сварочные работы",
    titleEst: "Сварочные работы est",
    titleFin: "Сварочные работы fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: welding,
  },
  {
    titleRus: "Продажа запчастей",
    titleEst: "Продажа запчастей est",
    titleFin: "Продажа запчастей fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: parts,
  },
  {
    titleRus: "Ремонт кондиционеров",
    titleEst: "Ремонт кондиционеров est",
    titleFin: "Ремонт кондиционеров fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: conditioner,
  },
  {
    titleRus: "Покрасочные работы",
    titleEst: "Покрасочные работы est",
    titleFin: "Покрасочные работы fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: paint,
  },
  {
    titleRus: "Удаление вмятин",
    titleEst: "Удаление вмятин est",
    titleFin: "Удаление вмятин fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: dents,
  },
  {
    titleRus: "Замена масла",
    titleEst: "Замена масла est",
    titleFin: "Замена масла fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: oil,
  },
  {
    titleRus: "Регулировка моста",
    titleEst: "Регулировка моста est",
    titleFin: "Регулировка моста fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: "",
  },
  {
    titleRus: "Ремонт шин",
    titleEst: "Ремонт шин est",
    titleFin: "Ремонт шин fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: tire,
  },
  {
    titleRus: "Шинные работы",
    titleEst: "Шинные работы est",
    titleFin: "Шинные работы fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: tireWorks,
  },
  {
    titleRus: "Работа с дисками",
    titleEst: "Работа с дисками est",
    titleFin: "Работа с дисками fin",
    descriptionRus: "Lorem ipsum lorem ipsum",
    descriptionEst: "Lorem ipsum est",
    descriptionFin: "Lorem ipsum fin",
    img: disk,
  },
];

const mediumScreenServicesArray = [
  [
    {
      titleRus: "Полировка автомобиля",
      titleEst: "Polirovka est",
      titleFin: "Polirovka fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: polishingImage,
    },
    {
      titleRus: "Покрасочные работы",
      titleEst: "Покрасочные работы est",
      titleFin: "Покрасочные работы fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: paint,
    },
    {
      titleRus: "Ремонт и обслуживание",
      titleEst: "Ремонт и обслуживание est",
      titleFin: "Ремонт и обслуживание fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: repairImage,
    },
    {
      titleRus: "Регулировка моста",
      titleEst: "Регулировка моста est",
      titleFin: "Регулировка моста fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: "",
    },
    {
      titleRus: "Диагностика",
      titleEst: "Диагностика est",
      titleFin: "Диагностика fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: diagnosticsImage,
    },
    {
      titleRus: "Ремонт электроники",
      titleEst: "Ремонт электроники est",
      titleFin: "Ремонт электроники fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: electric,
    },
    {
      titleRus: "Ремонт коробки передач",
      titleEst: "Ремонт коробки передач est",
      titleFin: "Ремонт коробки передач fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: transmission,
    },
    {
      titleRus: "Ремонт шин",
      titleEst: "Ремонт шин est",
      titleFin: "Ремонт шин fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: tire,
    },
    {
      titleRus: "Тюнинг и рестайлинг",
      titleEst: "Тюнинг и рестайлинг est",
      titleFin: "Тюнинг и рестайлинг fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: tuning,
    },
  ],
  [
    {
      titleRus: "Сварочные работы",
      titleEst: "Сварочные работы est",
      titleFin: "Сварочные работы fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: welding,
    },
    {
      titleRus: "Ремонт кондиционеров",
      titleEst: "Ремонт кондиционеров est",
      titleFin: "Ремонт кондиционеров fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: conditioner,
    },
    {
      titleRus: "Удаление вмятин",
      titleEst: "Удаление вмятин est",
      titleFin: "Удаление вмятин fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: dents,
    },
    {
      titleRus: "Работа с дисками",
      titleEst: "Работа с дисками est",
      titleFin: "Работа с дисками fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: disk,
    },
    {
      titleRus: "Продажа запчастей",
      titleEst: "Продажа запчастей est",
      titleFin: "Продажа запчастей fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: parts,
    },
    {
      titleRus: "Полировка автомобиля",
      titleEst: "Polirovka est",
      titleFin: "Polirovka fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: testImg,
    },
    {
      titleRus: "Замена масла",
      titleEst: "Замена масла est",
      titleFin: "Замена масла fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: oil,
    },
    {
      titleRus: "Шинные работы",
      titleEst: "Шинные работы est",
      titleFin: "Шинные работы fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: tireWorks,
    },
  ],
];

const largeScreenServicesArray = [
  [
    {
      titleRus: "Полировка автомобиля",
      titleEst: "Polirovka est",
      titleFin: "Polirovka fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: polishingImage,
    },
    {
      titleRus: "Ремонт и обслуживание",
      titleEst: "Ремонт и обслуживание est",
      titleFin: "Ремонт и обслуживание fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: repairImage,
    },
    {
      titleRus: "Диагностика",
      titleEst: "Диагностика est",
      titleFin: "Диагностика fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: diagnosticsImage,
    },
    {
      titleRus: "Ремонт шин",
      titleEst: "Ремонт шин est",
      titleFin: "Ремонт шин fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: tire,
    },
    {
      titleRus: "Продажа запчастей",
      titleEst: "Продажа запчастей est",
      titleFin: "Продажа запчастей fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: parts,
    },
    {
      titleRus: "Регулировка моста",
      titleEst: "Регулировка моста est",
      titleFin: "Регулировка моста fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: "",
    },
  ],
  [
    {
      titleRus: "Ремонт электроники",
      titleEst: "Ремонт электроники est",
      titleFin: "Ремонт электроники fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: electric,
    },
    {
      titleRus: "Покрасочные работы",
      titleEst: "Покрасочные работы est",
      titleFin: "Покрасочные работы fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: paint,
    },
    {
      titleRus: "Ремонт коробки передач",
      titleEst: "Ремонт коробки передач est",
      titleFin: "Ремонт коробки передач fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: transmission,
    },
    {
      titleRus: "Ремонт кондиционеров",
      titleEst: "Ремонт кондиционеров est",
      titleFin: "Ремонт кондиционеров fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: conditioner,
    },
    {
      titleRus: "Шинные работы",
      titleEst: "Шинные работы est",
      titleFin: "Шинные работы fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: tireWorks,
    },
  ],
  [
    {
      titleRus: "Удаление вмятин",
      titleEst: "Удаление вмятин est",
      titleFin: "Удаление вмятин fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: dents,
    },
    {
      titleRus: "Замена масла",
      titleEst: "Замена масла est",
      titleFin: "Замена масла fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: oil,
    },
    {
      titleRus: "Полировка автомобиля",
      titleEst: "Polirovka est",
      titleFin: "Polirovka fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: testImg,
    },
    {
      titleRus: "Тюнинг и рестайлинг",
      titleEst: "Тюнинг и рестайлинг est",
      titleFin: "Тюнинг и рестайлинг fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: tuning,
    },
    {
      titleRus: "Работа с дисками",
      titleEst: "Работа с дисками est",
      titleFin: "Работа с дисками fin",
      descriptionRus: "Lorem ipsum lorem ipsum",
      descriptionEst: "Lorem ipsum est",
      descriptionFin: "Lorem ipsum fin",
      img: disk,
    },
  ],
];

const Services = observer(() => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //Get current language
  const lang = langStore.getLanguage();

  return (
    <section className="w-full h-auto flex flex-col items-start justify-start gap-8 px-2 md:px-6 py-8">
      <div className="font-bold text-2xl">Наши услуги</div>

      {/* List  */}
      {width < 768 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-4">
          {smallScreenServicesArray.map((item, i) => (
            <div
              key={i}
              className="collapse bg-base-200 collapse-arrow rounded-none"
            >
              <input type="checkbox" />
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
              </div>
            </div>
          ))}
        </div>
      ) : width >= 768 && width < 1024 ? (
        <div className="w-full h-auto flex justify-between items-start gap-4">
          {mediumScreenServicesArray.map((col, i) => (
            <div
              key={`col-${i}`}
              className="w-6/12 h-auto flex flex-col items-center justify-between gap-4"
            >
              {col.map((item, i) => (
                <div
                  key={i}
                  className="collapse bg-base-200 collapse-arrow rounded-none"
                >
                  <input type="checkbox" />
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
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-between items-start gap-4">
          {largeScreenServicesArray.map((col, i) => (
            <div
              key={`col-${i}`}
              className="w-6/12 h-auto flex flex-col items-center justify-between gap-4"
            >
              {col.map((item, i) => (
                <div
                  key={i}
                  className="collapse bg-base-200 collapse-arrow rounded-none"
                >
                  <input type="checkbox" />
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
