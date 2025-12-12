import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard.jsx"
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />

        {/* FIXED: Registration Route */}
        <Route path="/registration" element={<Registration />} />

        <Route path="/dashboard" element={<DashBoard />} />

      </Routes>
    </BrowserRouter>
  );
}


export default App;
