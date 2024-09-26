import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Store from "./Components/Store";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
// import ShoppingProvider from "./context/shoppingContext";
import ShoppingProvider from "./context/ShoppingContext";
import Cart from "./Components/Cart";
import Footer from "./Components/Footer";
// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import Overlay from "./Components/Overlay";

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Overlay/>;
  }
  return (
    // <DotLoader />

    <ShoppingProvider>
      <Navbar />
      {/* <Container> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      {/* </Container> */}
      <Footer />
    </ShoppingProvider>
  );
};

export default App;
