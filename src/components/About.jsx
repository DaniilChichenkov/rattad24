import img2 from "../assets/2.jpeg";
import img3 from "../assets/3.jpeg";
import img4 from "../assets/4.jpeg";
import img5 from "../assets/5.jpeg";

const Services = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Вот уже 10 лет мы занимаемся обслуживанием и тюнингом премиальных
            автомобилей
          </h2>

          <p className="mt-4 text-gray-300">
            Возможно вы слышали о нас или видели нас в социальных сетях.
          </p>

          <p className="mt-4 text-gray-300">
            Сегодня мы предлагаем автолюбителям возможность бесплатно
            продиагностировать свой автомобиль в не рабочее время в нашем
            главном представительстве Таллине
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="flex items-start gap-4">
            <img src={img2} alt="" />
          </div>

          <div className="flex items-start gap-4">
            <img src={img3} alt="" />
          </div>

          <div className="flex items-start gap-4">
            <img src={img4} alt="" />
          </div>

          <div className="flex items-start gap-4">
            <img src={img5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
