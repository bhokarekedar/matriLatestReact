import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/index";
import Signup from "../pages/Signup";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  );
}