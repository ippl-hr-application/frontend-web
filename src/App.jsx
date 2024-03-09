import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TentangKami from "./pages/TentangKami";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/tentangkami" element={<TentangKami />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
