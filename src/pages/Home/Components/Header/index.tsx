import { ShoppingCart, Bag, Clock, Coffee } from "phosphor-react";
import {
  HomeHeader,
  DarkYellowCircle,
  YellowCircle,
  BlackCircle,
  PurpleCircle,
  Row,
  Items,
} from "./styles";

import coffeeHeader from "assets/coffee-header.svg";

export function Header() {
  return (
    <HomeHeader>
      <div>
        <h1>Find the perfect coffee for any time of the day</h1>
        <h2>
          With coffee delivery you can recieve our coffee no matter where you
          are, at any time
        </h2>

        <Items>
          <Row>
            <Row>
              <DarkYellowCircle>
                <ShoppingCart size={13} weight="fill" color="white" />
              </DarkYellowCircle>

              <p>Compra simples e segura</p>
            </Row>

            <Row>
              <BlackCircle>
                <Bag size={13} weight="fill" color="white" />
              </BlackCircle>

              <p>Embalagem mantém o café intacto</p>
            </Row>
          </Row>

          <Row>
            <Row>
              <YellowCircle>
                <Clock size={13} weight="fill" color="white" />
              </YellowCircle>

              <p>Entrega rápida e rastreada</p>
            </Row>

            <Row>
              <PurpleCircle>
                <Coffee size={13} weight="fill" color="white" />
              </PurpleCircle>

              <p>O café chega fresquinho até você</p>
            </Row>
          </Row>
        </Items>
      </div>

      <img src={coffeeHeader} alt="" />
    </HomeHeader>
  );
}
