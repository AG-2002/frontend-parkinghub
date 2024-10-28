import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RentOut from "./pages/RentOut";
import FindOut from "./pages/FindOut";
import AboutUs from "./pages/AboutUs";
import RegistrationForm from "./components/Forms/RegistrationForm";
import ResetPasswordForm from "./components/Forms/ResetPasswordForm";
import ContactForm from "./components/Forms/ContactForm";
import LoginForm from "./components/Forms/LoginForm";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/rentout" element={<RentOut />} />
        <Route path="/" element={<FindOut />} />
        <Route path="/reset" element={<ResetPasswordForm />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;