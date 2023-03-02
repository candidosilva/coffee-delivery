import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Checkout } from "./pages/Checkout";
import { Success } from "./pages/Success";
import { ShoppingCartProvider } from "contexts/shoppingCartContext";
import { AddressProvider } from "contexts/addressContext";

export function Router() {
  return (
    <ShoppingCartProvider>
      <AddressProvider>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
          </Route>
        </Routes>
      </AddressProvider>
    </ShoppingCartProvider>
  );
}
