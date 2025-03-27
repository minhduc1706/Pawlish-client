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
import Payment from "./pages/Payment";
import BlogExp from "./pages/BlogExp";
import BlogSer from "./pages/BlogSer";
import BlogEnt from "./pages/BlogEnt";
import BlogDetailSer from "./pages/BlogDetailSer";
import BlogDetailExp from "@/pages/BlogDetailExp";
import BlogDetailEnt from "@/pages/BlogDetailEnt";
import BookingPage from "./pages/Booking";
import ProductDetail from "./pages/shop/product/ProductDetail";
import PaymentResult from "./pages/PaymentResult";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/services/Grooming" element={<Grooming />} />
          <Route path="/booking" element={<BookingPage/>} />
          <Route path="/services/Bathing" element={<Bathing />} />
          <Route path="/services/Haircut" element={<Haircut />} />
          <Route path="/services/Bathing" element={<Bathing />} />
          <Route path="/payment-result" element={<PaymentResult />} />
          <Route path="/services/PetCare" element={<PetCare />} />
          <Route path="/services/Massage" element={<Massage />} />

          <Route path="/services/HealthCheck" element={<HealthCheck />} />
          <Route path="/services/Boarding" element={<Boarding />} />
          <Route path="/services/Training" element={<Training />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/shop/products" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Route>

        <Route path="auth" element={<AuthLayout />} />
        <Route path="blog/experience" element={<BlogExp />} />
        <Route path="blog/service" element={<BlogSer />} />
        <Route path="blog/entertainment" element={<BlogEnt />} />
        <Route path="blog/service/post/:id" element={<BlogDetailSer />} />
        <Route path="blog/experience/post/:id" element={<BlogDetailExp />} />
        <Route path="blog/entertainment/post/:id" element={<BlogDetailEnt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;