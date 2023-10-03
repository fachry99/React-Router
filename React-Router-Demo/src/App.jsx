import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
import { About } from "./components/About.jsx";
import { OrderSummary } from "./components/OrderSummary.jsx";
import { Navbar } from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
