
import { Route,Routes } from "react-router-dom";
import ScrollToTop from "./pages/components/scroll";
import Home from "./pages/home";
import Bookdetails from "./pages/bookdetails";
import ShoppingCart from "./pages/shoppingcart";
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/bookdetails/:id" element={<Bookdetails />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>
   
    </>
  );
}

export default App;
