import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import FiturPage from "./pages/FiturPage"
import TentangPage from "./pages/TentangPage"
import HargaPage from "./pages/HargaPage"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route 
            path="/fitur"
            element={<FiturPage/>}
          />
          <Route 
            path="/tentang"
            element={<TentangPage/>}
          />
          <Route
            path="/harga"
            element={<HargaPage/>}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
