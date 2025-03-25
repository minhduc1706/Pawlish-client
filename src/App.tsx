import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/auth/AuthLayout";
import Product from "./pages/shop/product/Product";
import Haircut from "./pages/Haircut";

import Bathing from "./pages/Bathing";

import HealthCheck from "./pages/HealthCheck";
import Boarding from "./pages/Boarding";
import Training from "./pages/Training";
import PetCare from "./pages/PetCare";
import Grooming from "./pages/Grooming";
import Massage from "./pages/Massage";
import FleaTreatment from "./pages/FleaTreatment";

import Payment from "./pages/Payment";

import BlogExp from "./pages/BlogExp";
import BlogSer from "./pages/BlogSer";
import BlogEnt from "./pages/BlogEnt";
import BlogDetailSer from "./pages/BlogDetailSer";
import BlogDetailExp from "@/pages/BlogDetailExp";
import BlogDetailEnt from "@/pages/BlogDetailEnt";
import BookingPage from "./pages/Booking";
import ProductDetail from "./pages/shop/product/ProductDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các route trong UserLayout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/Grooming" element={<Grooming />} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/services/Bathing" element={<Bathing />} />
          <Route path="/services/Haircut" element={<Haircut />} />
          <Route path="/services/Bathing" element={<Bathing />} />

          <Route path="/services/PetCare" element={<PetCare />} />
          <Route path="/services/Massage" element={<Massage />} />
          <Route path="/services/FleaTreatment" element={<FleaTreatment />} />

          <Route path="/services/HealthCheck" element={<HealthCheck />} />
          <Route path="/services/Boarding" element={<Boarding />} />
          <Route path="/services/Training" element={<Training />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shop/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>

        {/* Route cho phần Auth */}
        <Route path="auth" element={<AuthLayout />} />

        {/* Các route khác (nếu có) */}
        <Route path="blog/experience" element={<BlogExp />} />
        <Route path="blog/service" element={<BlogSer />} />
        <Route path="blog/entertainment" element={<BlogEnt />} />
        <Route path="blog/service/post/:id" element={<BlogDetailSer />} />
        <Route path="blog/experience/post/:id" element={<BlogDetailExp />} />
        <Route path="blog/entertainment/post/:id" element={<BlogDetailEnt />} />

        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} /> */}

        {/* Route cho admin (nếu có) */}
        {/* <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;