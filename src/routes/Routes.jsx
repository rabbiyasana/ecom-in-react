import { Routes, Route } from "react-router-dom";
import Home from "../screens/Home/Home";
import Contact from "../screens/Contact US/Contact";
import About from "../screens/About us/About";
export default function () {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}
