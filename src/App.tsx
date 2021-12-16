import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navbar/Navbar";
import { Favourite } from "./views/Favourite";
import { Home } from "./views/Home";
import { NotFound } from "./views/NotFound";
import routes from "./components/Routes";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.favourite} element={<Favourite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
