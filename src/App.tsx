import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/layouts/UserLayout";
import Home from "./pages/Home";
import AuthLayout from "./components/auth/AuthLayout";
import BlogExp from "./pages/blog/BlogExp";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="auth" element={<AuthLayout />} />
        <Route path="blog/experience" element={<BlogExp />}/>
        
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<Unauthorized />} /> */}

        {/* <Route element={<ProtectRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
