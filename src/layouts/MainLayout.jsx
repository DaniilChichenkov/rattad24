import {
  Cta,
  About,
  Services,
  AppointmentForm,
  Contacts,
  Footer,
} from "../components";

const MainLayout = () => {
  return (
    <div>
      <Cta />
      <Services />
      <About />
      <AppointmentForm />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainLayout;
