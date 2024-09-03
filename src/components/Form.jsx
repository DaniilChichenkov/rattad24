import { Formik, Form, Field, ErrorMessage } from "formik";
import { observer } from "mobx-react-lite";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

import refsStorage from "../stores/refsStore";
import langStore from "../stores/langStore";

import { sendEmail } from "../api/api";

import locations from "../content/locations";

//Toast notifications setup
const onSuccessToast = (msg) => toast.success(msg);
const onErrorToast = (msg) => toast.error(msg);

const AppointmentForm = observer(() => {
  const currentLang = langStore.getLanguage();

  return (
    <>
      <Toaster />
      <section
        ref={(node) => refsStorage.setRef("form", node)}
        className="bg-gray-100"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-6">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="text-xl font-bold lg:text-4xl md:text-2xl">
                {currentLang === "rus" ? (
                  <>Забронируйте визит</>
                ) : currentLang === "est" ? (
                  <>Broneeri visiit</>
                ) : (
                  <>Varaa käynti</>
                )}
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
                  name: Yup.string().required(
                    currentLang === "rus"
                      ? "Это обязательно поле"
                      : currentLang === "est"
                      ? "See on kohustuslik väli"
                      : "Tämä on pakollinen kenttä"
                  ),
                  email: Yup.string().required(
                    currentLang === "rus"
                      ? "Это обязательно поле"
                      : currentLang === "est"
                      ? "See on kohustuslik väli"
                      : "Tämä on pakollinen kenttä"
                  ),
                  phone: Yup.string().required(
                    currentLang === "rus"
                      ? "Это обязательно поле"
                      : currentLang === "est"
                      ? "See on kohustuslik väli"
                      : "Tämä on pakollinen kenttä"
                  ),
                  place: Yup.string().required(
                    currentLang === "rus"
                      ? "Это обязательно поле"
                      : currentLang === "est"
                      ? "See on kohustuslik väli"
                      : "Tämä on pakollinen kenttä"
                  ),
                })}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    await sendEmail({ ...values, lang: currentLang });

                    //Toast notification
                    onSuccessToast(
                      currentLang === "rus"
                        ? "Данные успешно отправлены"
                        : currentLang === "est"
                        ? "Andmed on edukalt saadetud"
                        : "Tiedot lähetetty onnistuneesti"
                    );
                    resetForm();
                  } catch (err) {
                    onErrorToast(
                      currentLang === "rus"
                        ? "Попробуйте позже"
                        : currentLang === "est"
                        ? "Proovige hiljem uuesti"
                        : "Yritä myöhemmin uudelleen"
                    );
                  }
                }}
              >
                {({ setFieldValue, values, isSubmitting }) => (
                  <Form>
                    <div>
                      <label className="sr-only" htmlFor="name">
                        Name
                      </label>
                      <Field
                        name="name"
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder={
                          currentLang === "rus"
                            ? "имя"
                            : currentLang === "est"
                            ? "nimi"
                            : "nimi"
                        }
                        type="text"
                        id="name"
                      />
                      <ErrorMessage
                        name="name"
                        component="p"
                        className=" text-red-500 text-md mt-3"
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
                          placeholder={
                            currentLang === "rus"
                              ? "Электронная почта"
                              : currentLang === "est"
                              ? "E-post"
                              : "Sähköposti"
                          }
                          type="email"
                          id="email"
                        />
                        <ErrorMessage
                          name="email"
                          component="p"
                          className=" text-red-500 text-md mt-3"
                        />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">
                          {currentLang === "rus" ? (
                            <>Телефон</>
                          ) : currentLang === "est" ? (
                            <>Telefon</>
                          ) : (
                            <>Puhelin</>
                          )}
                        </label>
                        <Field
                          name="phone"
                          className="w-full rounded-lg border-gray-200 p-3 text-sm"
                          placeholder={
                            currentLang === "rus"
                              ? "Номер телефона"
                              : currentLang === "est"
                              ? "Telefoninumber"
                              : "Puhelinnumero"
                          }
                          type="tel"
                          id="phone"
                        />
                        <ErrorMessage
                          name="phone"
                          component="p"
                          className=" text-red-500 text-md mt-3"
                        />
                      </div>
                    </div>

                    {/* Place selection */}
                    <div className="collapse collapse-arrow bg-base-100 mt-4">
                      <input type="checkbox" />
                      <div className="collapse-title text-xl">
                        {currentLang === "rus" ? (
                          <>Выберите место</>
                        ) : currentLang === "est" ? (
                          <>Valige koht</>
                        ) : (
                          <>Valitse paikka</>
                        )}
                      </div>
                      <div className="collapse-content grid grid-cols-1 md:grid-cols-3 gap-y-2 py-1">
                        {/* Finland locations */}
                        {locations.finland.map((item, i) => (
                          <div key={i} className="form-control md:w-8/12">
                            <label className="label cursor-pointer">
                              <span className="label-text">{`${item.city} / ${item.address}`}</span>
                              <Field
                                type="radio"
                                name="place"
                                className="radio checked:bg-blue-500"
                                value={item.address}
                                onChange={() => {
                                  setFieldValue("place", item.address);
                                }}
                                checked={values.place === item.address}
                              />
                              <ErrorMessage
                                name="place"
                                component="p"
                                className=" text-red-500 text-md mt-3"
                              />
                            </label>
                          </div>
                        ))}
                        {/* Estonia locations */}
                        {locations.estonia.map((item, i) => (
                          <div key={i} className="form-control md:w-8/12">
                            <label className="label cursor-pointer">
                              <span className="label-text">{`${item.city} / ${item.address}`}</span>
                              <Field
                                type="radio"
                                name="place"
                                className="radio checked:bg-blue-500"
                                value={item.address}
                                onChange={() => {
                                  setFieldValue("place", item.address);
                                }}
                                checked={values.place === item.address}
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="submit"
                        className={`inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto ${
                          isSubmitting && "btn-disabled"
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="loading loading-spinner loading-xs"></span>
                        ) : currentLang === "rus" ? (
                          <>Отправить запрос</>
                        ) : currentLang === "est" ? (
                          <>Saada päring</>
                        ) : (
                          <>Lähetä pyyntö</>
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default AppointmentForm;
