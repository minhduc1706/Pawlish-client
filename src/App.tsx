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

import BlogExp from "./pages/BlogExp";
import BlogSer from "./pages/BlogSer";
import BlogEnt from "./pages/BlogEnt";
import BlogDetailSer from "./pages/BlogDetailSer";
import BlogDetailExp from "@/pages/BlogDetailExp";
import BlogDetailEnt from "@/pages/BlogDetailEnt";

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
          <Route path="blog/experience" element={<BlogExp />}/>
          <Route path="blog/service" element={<BlogSer />}/>
          <Route path="blog/entertainment" element={<BlogEnt />}/>
          <Route path="blog/service/post/:id" element={<BlogDetailSer />}/>
          <Route path="blog/experience/post/:id" element={<BlogDetailExp />} />
          <Route path="blog/entertainment/post/:id" element={<BlogDetailEnt />} />
        </Route>

        {/* Route cho phần Auth */}
        <Route path="auth" element={<AuthLayout />} />

        
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
