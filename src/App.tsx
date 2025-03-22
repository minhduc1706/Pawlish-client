import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/auth/AuthLayout";
import Accessories from "./pages/shop/accessories/Accessories.tsx";
import DogProducts from "./pages/shop/dog/DogProducts.tsx";
import CatProducts from "./pages/shop/cat/CatProducts.tsx";
import ProductDetail from "./pages/shop/ProductDetail.tsx";
import { Toaster } from 'sonner';

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/phu-kien" element={<Accessories />} />
            <Route path="/cho-cho" element={<DogProducts />} />
            <Route path="/cho-meo" element={<CatProducts />} />
            <Route path="/san-pham/:id" element={<ProductDetail />} />
          </Route>
          <Route path="auth" element={<AuthLayout />} />

          {/* <Route path="/login" element={<LoginPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} /> */}

          {/* <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<ManageUsers />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
