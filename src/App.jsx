import { useState } from "react";
import "./App.css";
import Nav from "./components/navigation/nav";
import Home from "./screens/Home/Home";
import Footer from "./components/footer/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Home />
      <Footer />
    </>
  );
}

export default App;
