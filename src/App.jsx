import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import FiturPage from "./pages/FiturPage";
import TentangPage from "./pages/TentangPage";
import HargaPage from "./pages/HargaPage";
import LupaPassword from "./pages/LupaPassword";
import RegisterPage from "./pages/RegisterPage";
import UbahSandi from "./pages/UbahSandi";
import NotFoundPage from "./pages/NotFoundPage";
import TaskPage from "./pages/TaskPage";

import Employees from "./pages/ManajemenAkunKaryawan/Employees"
import AddEmployees from "./pages/ManajemenAkunKaryawan/AddEmployees"
import DetailEmployee from "./pages/ManajemenAkunKaryawan/DetailEmployee"

import NoAccessToken from "./security/NoAccessToken"
import Protected from "./security/Protected"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/login"
            element={
              <NoAccessToken>
                <LoginPage />
              </NoAccessToken>
            }
          />
          <Route
            path="/verify-email"
            element={
              <NoAccessToken>
                <LupaPassword />
              </NoAccessToken>
            }
          />
          <Route
            path="/verify-sandi"
            element={
              <NoAccessToken>
                <UbahSandi />
              </NoAccessToken>
            }
          />
          <Route
            path="/register"
            element={
              <NoAccessToken>
                <RegisterPage />
              </NoAccessToken>
            }
          />
          <Route path="/fitur" element={<FiturPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="/harga" element={<HargaPage />} />

          <Route
            path="/dashboard"
            element={
              <Protected>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/task"
            element={
              <Protected>
                <TaskPage />
              </Protected>
            }
          />

          <Route
            path="/employees"
            element={
              <Protected>
                <Employees />
              </Protected>
            }
          />
          <Route
            path="/add_employees"
            element={
              <Protected>
                <AddEmployees />
              </Protected>
            }
          />
          <Route
            path="/detail_employees"
            element={
              <Protected>
                <DetailEmployee />
              </Protected>
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
