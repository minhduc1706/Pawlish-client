import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/auth/AuthLayout";
import GroomingCombo1 from "./pages/GroomingCombo1"; // Import Combo1
import GroomingCombo4 from "./pages/GroomingCombo4";
import GroomingCombo3 from "./pages/GroomingCombo3";

import PromotionServicePage from "./pages/PromotionServicePage";
import PetHotelPage from "./pages/PetHotelPage";
import TakeDogWalkPage from "./pages/TakeDogWalkPage";
import PetSpaServices from "./pages/PetSpaServices";
import PetHomeCare from "./pages/PetHomeCare";
import PetBathPage from "./pages/PetBathPage";
import CutPetHairPage from "./pages/CutPetHairPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các route trong UserLayout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services/PetSpaServices" element={<PetSpaServices />} />
          <Route path="/services/Combo1" element={<GroomingCombo1 />} />
          <Route path="/services/Combo3" element={<GroomingCombo3 />} />
          <Route path="/services/Combo4" element={<GroomingCombo4 />} />
          <Route path="/services/PetHomeCare" element={<PetHomeCare />} />
          <Route path="/services/PetBathPage" element={<PetBathPage />}></Route>
          <Route
            path="/services/CutPetHairPage"
            element={<CutPetHairPage />}
          ></Route>

          <Route
            path="/services/PromotionServicePage"
            element={<PromotionServicePage />}
          />
          <Route path="/services/PetHotelPage" element={<PetHotelPage />} />
          <Route
            path="/services/TakeDogWalkPage"
            element={<TakeDogWalkPage />}
          />
        </Route>

        {/* Route cho phần Auth */}
        <Route path="auth" element={<AuthLayout />} />

        {/* Các route khác (nếu có) */}
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
