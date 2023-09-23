import { Routes, Route } from "react-router-dom";
import "./App.css";
// import { ProtectedRoute } from "./components/ProtectedRoute";

import SanPhamAdmin from "./pages/admin/SanPhamAdmin";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forbidden" element={<Forbidden />} /> */}

        <Route
          path="/admin/product"
          element={
            // <ProtectedRoute userRole="admin">
            <SanPhamAdmin />
            /* </ProtectedRoute> */
          }
        />
      </Routes>
    </div>
  );
};

export default App;
