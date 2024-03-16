import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import FiturPage from "./pages/FiturPage"
import TentangPage from "./pages/TentangPage"
import HargaPage from "./pages/HargaPage"
import LupaPassword from "./pages/LupaPassword"
import RegisterPage from "./pages/RegisterPage"
import UbahSandi from "./pages/UbahSandi"

import NoAccessToken from "./security/NoAccessToken"
// import Protected from "./security/Protected"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              // <Protected>
              <HomePage />
              // </Protected>
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
            element={<LupaPassword />}
          />
          <Route
            path="/verify-sandi"
            element={<UbahSandi />}
          />
          <Route
            path="/register"
            element={
              <NoAccessToken>
                <RegisterPage />
              </NoAccessToken>
            }
          />
          <Route
            path="/fitur"
            element={<FiturPage />}
          />
          <Route
            path="/tentang"
            element={<TentangPage />}
          />
          <Route
            path="/harga"
            element={<HargaPage />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
