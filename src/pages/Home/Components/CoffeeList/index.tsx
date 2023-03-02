import {
  Body,
  Button,
  Header,
  Main,
  Card,
  CoffeeImage,
  CoffeeType,
  CoffeeTitle,
  CoffeeDescription,
  Price,
  PriceRow,
  CountBox,
  CartBox,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Title } from "./styles";
import { useContext, useReducer } from "react";
import { Row } from "styles/baseStyles";
import { ShoppingCartContext } from "contexts/shoppingCartContext";
import { coffeesReducer, coffees, Coffee } from "reducers/coffeeList/reducer";

export function CoffeeList() {
  const [coffeesState, dispatch] = useReducer(coffeesReducer, coffees);
  const { shoppingCart, addItem, updateQty } = useContext(ShoppingCartContext);

  function handleAddItemCount(name: string) {
    dispatch({
      type: "addItemCount",
      name,
    });
  }

  function handleSubItemCount(name: string) {
    dispatch({
      type: "subItemCount",
      name,
    });
  }

  function handleAddItemToShoppingCart(coffee: Coffee) {
    if (shoppingCart.find((item) => item.name === coffee.name)) {
      updateQty(coffee.name, coffee.qty);
    } else {
      addItem(coffee);
    }
  }

  return (
    <Main>
      <Header>
        <Title>Our coffee</Title>

        <div>
          {coffeeTypes.map((coffee, idx) => {
            return <Button key={idx}>{coffee}</Button>;
          })}
        </div>
      </Header>

      <Body>
        {coffeesState.map((coffee: Coffee) => {
          return (
            <Card key={coffee.name}>
              <CoffeeImage src={coffee.image} alt="" />

              <Row justify="center">
                {coffee.types.map((type, index) => {
                  return <CoffeeType key={index}>{type}</CoffeeType>;
                })}
              </Row>

              <CoffeeTitle>{coffee.name}</CoffeeTitle>

              <CoffeeDescription>{coffee.description}</CoffeeDescription>

              <PriceRow>
                <Price>
                  <span>$</span>
                  <p>{coffee.price}</p>
                </Price>

                <Row>
                  <CountBox>
                    <Minus
                      color="#8047F8"
                      cursor="pointer"
                      onClick={() => handleSubItemCount(coffee.name)}
                    />
                    <p>{coffee.qty}</p>
                    <Plus
                      color="#8047F8"
                      cursor="pointer"
                      onClick={() => handleAddItemCount(coffee.name)}
                    />
                  </CountBox>

                  <CartBox onClick={() => handleAddItemToShoppingCart(coffee)}>
                    <ShoppingCart width="19" color="white" weight="fill" />
                  </CartBox>
                </Row>
              </PriceRow>
            </Card>
          );
        })}
      </Body>
    </Main>
  );
}

const coffeeTypes = ["TRADITIONAL", "SPECIAL", "WITH MILK", "ALCOHOL", "ICED"];
