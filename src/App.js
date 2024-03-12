import Forgot from "./Component/Forgot";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import style from "./App.module.css"
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/resetpassword" element={<Forgot/>}/>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
