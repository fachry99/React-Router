import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home.jsx";
// import { About } from "./components/About.jsx";
import { OrderSummary } from "./components/OrderSummary.jsx";
import { Navbar } from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About.jsx"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
