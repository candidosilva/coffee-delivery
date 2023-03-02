import { Column, Row } from "styles/baseStyles";

import { Minus, Plus, Trash } from "phosphor-react";
import { CountBox, DeleteBox, Line, Price, Title } from "./styles";
import { useContext } from "react";
import { ShoppingCartContext } from "contexts/shoppingCartContext";

interface Coffee {
  name: string;
  image: string;
  price: number;
  qty: number;
}

interface Item {
  item: Coffee;
}

export function Item({ item }: Item) {
  const { removeItem, changeQty } = useContext(ShoppingCartContext);

  function handleAddQty() {
    changeQty(item.name, true);
  }

  function handleSubtractQty() {
    changeQty(item.name, false);
  }

  function handleRemoveItem() {
    removeItem(item.name);
  }

  const price = (item.price * item.qty).toFixed(2);

  return (
    <div>
      <Row justify="space-between">
        <Row>
          <img src={item.image} width="64" alt="" />
          <Column ml="20">
            <Title>{item.name}</Title>
            <Row gap="8">
              <CountBox>
                <Minus
                  onClick={() => handleSubtractQty()}
                  cursor="pointer"
                  color="#8047F8"
                />
                <p>{item.qty}</p>
                <Plus
                  onClick={() => handleAddQty()}
                  cursor="pointer"
                  color="#8047F8"
                />
              </CountBox>

              <DeleteBox>
                <Trash
                  onClick={() => handleRemoveItem()}
                  cursor="pointer"
                  color="#8047F8"
                />
                <p>REMOVE</p>
              </DeleteBox>
            </Row>
          </Column>
        </Row>

        <Price>$ {price}</Price>
      </Row>

      <Line></Line>
    </div>
  );
}
