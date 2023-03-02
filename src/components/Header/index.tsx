import {
  HeaderContainer,
  ShoppingCart,
  HeaderContainerRight,
  Localization,
  ItemsCircle,
} from "./styles";
import { MapPin, ShoppingCart as Icon } from "phosphor-react";

import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "contexts/shoppingCartContext";

export function Header() {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logo} alt="" />
      </NavLink>

      <HeaderContainerRight>
        <Localization>
          <MapPin size={19} weight="fill" />
          <span>Belo Horizonte, MG</span>
        </Localization>

        <ShoppingCart>
          {shoppingCart.length > 0 && (
            <ItemsCircle>{shoppingCart.length}</ItemsCircle>
          )}

          <NavLink to="/checkout" title="Checkout">
            <Icon color="#C47F17" size={18} weight="fill" />
          </NavLink>
        </ShoppingCart>
      </HeaderContainerRight>
    </HeaderContainer>
  );
}
