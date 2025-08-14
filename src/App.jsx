import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/main-layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import ShopSingle from "./pages/ShopSingle/ShopSingle";
import ShopSingleMain from "./pages/ShopSingle/ShopSingle-Main";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          
          <Route path="/:id" element={<ShopSingleMain/>} />
          <Route path="shopsingle-main/:id" element={<ShopSingle />} />
        </Route>
      </Routes>
    </Router>
  );
}
