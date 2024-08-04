import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RentOut from "./pages/RentOut";
import FindOut from "./pages/FindOut";
import AboutUs from "./pages/AboutUs";
import LoginForm from "./components/Forms/LoginForm";
import RegistrationForm from "./components/Forms/RegistrationForm";
import ResetPasswordForm from "./components/Forms/ResetPasswordForm";
import ContactForm from "./components/Forms/ContactForm";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/rentout" element={<RentOut />} />
        <Route path="/findout" element={<FindOut />} />
        <Route path="/forgetpassword" element={<ResetPasswordForm />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
