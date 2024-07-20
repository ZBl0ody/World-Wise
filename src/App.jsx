import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route index path="cites" element={<CityList />} />
          <Route path="countries" element={<CountryList />} />
          {/* <Route path="form" element={<Form />} /> */}
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
