const finlandCities = [
  {
    city: "Helsinki",
    workshops: [
      {
        address: "Helsinki 1",
        tel: [
          {
            number: "12345678",
          },
          {
            number: "987654321",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
    ],
  },
];

const estonianCities = [
  {
    city: "Tallinn",
    workshops: [
      {
        address: "Tallinn 1",
        tel: [
          {
            number: "1231536457",
          },
          {
            number: "464758573",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
      {
        address: "Tallinn 2",
        tel: [
          {
            number: "345345346",
          },
          {
            number: "456457457",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
    ],
  },
  {
    city: "Tartu",
    workshops: [
      {
        address: "Tartu 1",
        tel: [
          {
            number: "1231536457",
          },
          {
            number: "464758573",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
      {
        address: "Tartu 2",
        tel: [
          {
            number: "345345346",
          },
          {
            number: "456457457",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
    ],
  },
  {
    city: "Narva",
    workshops: [
      {
        address: "Narva 1",
        tel: [
          {
            number: "1231536457",
          },
          {
            number: "464758573",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
      {
        address: "Narva 2",
        tel: [
          {
            number: "345345346",
          },
          {
            number: "456457457",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
      {
        address: "Narva 1",
        tel: [
          {
            number: "1231536457",
          },
          {
            number: "464758573",
          },
        ],
        workHours: {
          workWeek: "9-18",
          weekend: "12-16",
        },
      },
    ],
  },
];

const Contacts = () => {
  return (
    <section className="py-10">
      <div className="w-full flex justify-start px-4">
        <p className="font-bold text-2xl">Наши контакты</p>
      </div>

      {/* Finland contacts */}
      <article className="w-full h-auto mt-10 px-4">
        <div className="w-full flex justify-start items-center font-bold text-xl">
          Финляндия:
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-4">
          {finlandCities.map((city) => (
            <>
              {city.workshops.map((shop, shopIndex) => (
                <div key={shopIndex}>
                  <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <h2 className="mt-2 font-bold text-lg">{city.city}</h2>
                    <h2 className="mt-2 font-bold">{shop.address}</h2>
                    <p className="sm:mt-1 sm:block sm:text-sm text-black font-bold">
                      Рабочие часы:
                    </p>
                    <p>Неделя: {shop.workHours.workWeek}</p>
                    <p>Выходные: {shop.workHours.weekend}</p>

                    <p className="sm:mt-1 sm:block sm:text-sm text-black font-bold">
                      Телефоны:
                    </p>
                    {shop.tel.map((tel, telI) => (
                      <p key={telI}>
                        {telI + 1} : {tel.number}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </article>

      {/* Estonia contacts */}
      <article className="w-full h-auto mt-10 px-4">
        <div className="w-full flex justify-start items-center font-bold text-xl">
          Эстония:
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-4">
          {estonianCities.map((city) => (
            <>
              {city.workshops.map((shop, shopIndex) => (
                <div key={shopIndex}>
                  <div className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                    <h2 className="mt-2 font-bold text-lg">{city.city}</h2>
                    <h2 className="mt-2 font-bold">{shop.address}</h2>
                    <p className="sm:mt-1 sm:block sm:text-sm text-black font-bold">
                      Рабочие часы:
                    </p>
                    <p>Неделя: {shop.workHours.workWeek}</p>
                    <p>Выходные: {shop.workHours.weekend}</p>

                    <p className="sm:mt-1 sm:block sm:text-sm text-black font-bold">
                      Телефоны:
                    </p>
                    {shop.tel.map((tel, telI) => (
                      <p key={telI}>
                        {telI + 1} : {tel.number}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ))}
        </div>
      </article>
    </section>
    // <section className={`${selectedCountry ? "pb-10" : "pb-64"}`}>
    //   <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    //     <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
    //       <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right lg:w-6/12">
    //         <h2 className="text-3xl font-bold sm:text-4xl">Our contacts</h2>

    //         <p className="mt-4 text-gray-600">Select the country</p>

    //         <details className="dropdown mt-4 flex flex-col items-center">
    //           <summary className="btn m-1 capitalize">
    //             {selectedCountry ? selectedCountry : "Select"}
    //           </summary>
    //           <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    //             <li>
    //               <button onClick={() => setSelectedCountry("finland")}>
    //                 Finland
    //               </button>
    //             </li>
    //             <li>
    //               <button onClick={() => setSelectedCountry("estonia")}>
    //                 Estonia
    //               </button>
    //             </li>
    //           </ul>
    //         </details>
    //         {selectedCountry && (
    //           <>
    //             <p className="mt-8 text-gray-600">Select the city</p>
    //             <details className="dropdown mt-4 flex flex-col items-center">
    //               <summary className="btn m-1 capitalize">
    //                 {selectedCity ? selectedCity.city : "Select"}
    //               </summary>
    //               <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    //                 {availableCities &&
    //                   availableCities.map((item, i) => (
    //                     <li key={i}>
    //                       <button onClick={() => setSelectedCity(item)}>
    //                         {item.city}
    //                       </button>
    //                     </li>
    //                   ))}
    //               </ul>
    //             </details>
    //           </>
    //         )}
    //       </div>

    //       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    //         {selectedCity &&
    //           selectedCity.workshops.map((item, i) => (
    //             <div
    //               key={i}
    //               className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
    //             >
    //               <h2 className="mt-2 font-bold">{item.address}</h2>
    //               <p className="sm:mt-1 sm:block sm:text-sm text-black font-bold">
    //                 Working hours:
    //               </p>
    //               <p>Week: {item.workHours.workWeek}</p>
    //               <p>Weekend: {item.workHours.weekend}</p>

    //               <p className="sm:mt-1 sm:block sm:text-sm text-black font-bold">
    //                 Tel:
    //               </p>
    //               {item.tel.map((tel, telI) => (
    //                 <p key={telI}>
    //                   {telI + 1} : {tel.number}
    //                 </p>
    //               ))}
    //             </div>
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Contacts;
