import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const placesArray = [
  {
    title: "Helsinki",
    address: "Helsinki",
  },
  {
    title: "Tallinn/Pirita",
    address: "Pirita",
  },
  {
    title: "Tartu",
    address: "Tartu",
  },
  {
    title: "Narva",
    address: "Narva",
  },
  {
    title: "Tallinn/Tabasalu",
    address: "Tabasalu",
  },
  {
    title: "Lahti",
    address: "Lahti",
  },
];

const AppointmentForm = () => {
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-xl font-bold lg:text-3xl md:text-2xl ">
              Забронируйте визит
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                place: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("This is a required field"),
                email: Yup.string().required("This is a required field"),
                phone: Yup.string().required("This is a required field"),
              })}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ setFieldValue, values }) => (
                <Form>
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <Field
                      name="name"
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Имя"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <Field
                        name="email"
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Электронная почта"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <Field
                        name="phone"
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Номер телефона"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  {/* Place selection */}
                  <div className="collapse collapse-arrow bg-base-100 mt-4">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl">Выберите место</div>
                    <div className="collapse-content grid grid-cols-1 md:grid-cols-3 gap-y-2 py-1">
                      {placesArray.map((item, i) => (
                        <div key={i} className="form-control md:w-8/12">
                          <label className="label cursor-pointer">
                            <span className="label-text">{item.title}</span>
                            <Field
                              type="radio"
                              name="place"
                              className="radio checked:bg-blue-500"
                              value={item.address}
                              onChange={() => {
                                setFieldValue("place", item.title);
                              }}
                              checked={values.place === item.title}
                            />
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Отправить запрос
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
