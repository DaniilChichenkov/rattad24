import { observer } from "mobx-react-lite";

import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

import refsStorage from "../stores/refsStore";
import langStore from "../stores/langStore";

const Services = observer(() => {
  const currentLang = langStore.getLanguage();

  return (
    <section
      ref={(node) => refsStorage.setRef("about", node)}
      className="bg-gray-900 text-white"
    >
      <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            {currentLang === "rus" ? (
              <>
                Уже 10 лет мы профессионально занимаемся обслуживанием и
                тюнингом премиальных автомобилей. Возможно, вы уже слышали о нас
                или видели наши работы в социальных сетях.
              </>
            ) : currentLang === "est" ? (
              <>
                Oleme juba 10 aastat professionaalselt tegelenud premium-autode
                hoolduse ja tuunimisega. Võimalik, et olete meist juba kuulnud
                või näinud meie töid sotsiaalmeedias.
              </>
            ) : (
              <>
                Olemme jo 10 vuoden ajan harjoittaneet ammattitaitoisesti
                premium-autoiden huoltoa ja viritystä. Ehkä olet jo kuullut
                meistä tai nähnyt työmme sosiaalisessa mediassa.
              </>
            )}
          </h2>

          <p className="mt-4 text-gray-300 lg:text-xl">
            {currentLang === "rus" ? (
              <>
                Сегодня у вас есть уникальная возможность: бесплатный визуальный
                осмотр и диагностика ходовой части вашего автомобиля в нашем
                представительстве в Таллине, даже за пределами обычного рабочего
                времени.
              </>
            ) : currentLang === "est" ? (
              <>
                Täna on teil ainulaadne võimalus: tasuta visuaalne ülevaatus ja
                teie auto veermiku diagnostika meie Tallinna esinduses, isegi
                väljaspool tavapärast tööaega.
              </>
            ) : (
              <>
                Tänään teillä on ainutlaatuinen mahdollisuus: ilmainen
                visuaalinen tarkastus ja autonne alustan diagnosointi Tallinnan
                toimipisteessämme, jopa normaalien työaikojen ulkopuolella.
              </>
            )}
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12">
          <div className="flex items-start gap-4 lg:w-9/12">
            <img src={img2} alt="" />
          </div>

          <div className="flex items-start gap-4 lg:w-9/12">
            <img src={img3} alt="" />
          </div>

          <div className="flex items-start gap-4 lg:w-9/12">
            <img src={img4} alt="" />
          </div>

          <div className="flex items-start gap-4 lg:w-9/12">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
