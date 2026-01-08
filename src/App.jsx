import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard.jsx"
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import UserProfile from "./Components/UserProfile.jsx";
import SunTask from "./Components/SunTask.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

         <Route path="/" element={<Login />} />

     
        <Route path="/register" element={<Registration />} /> 

         <Route path="/dashboard" element={<DashBoard />} />
         <Route path="/UserProfile" element={<UserProfile />} /> 


      </Routes>
    // </BrowserRouter>





    // <div>
    //   <SunTask />
    // </div>


  );
}


export default App;
