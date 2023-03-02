import {
  CompleteYourOrderColumn,
  SelectedCoffeeColumn,
  SelectedCoffeesBox,
  Title,
  Button,
  PriceRow,
  TotalRow,
  Form,
} from "./styles";
import { AddressInfoCard } from "./Components/AddressInfoCard";
import { PaymentCard } from "./Components/PaymentCard";
import { Item } from "./Components/Item";
import { useContext } from "react";
import { ShoppingCartContext } from "contexts/shoppingCartContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AddressContext } from "contexts/addressContext";
import { useNavigate, redirect } from "react-router-dom";

type Inputs = {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

export function Checkout() {
  const navigate = useNavigate();
  const { shoppingCart } = useContext(ShoppingCartContext);
  const { address, updateAddress } = useContext(AddressContext);
  const schema = z.object({
    cep: z
      .string()
      .min(3, { message: "Minumim 3 numbers" })
      .max(7, { message: "Max 7 numbers" }),
    street: z.string().min(3, { message: "Required" }),
    number: z.string().min(1, { message: "Required" }),
    complement: z.string(),
    neighborhood: z.string().min(1, { message: "Required" }),
    city: z.string().min(3, { message: "Required" }),
    state: z.string().min(3, { message: "Required" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateAddress({
      ...address,
      cep: data.cep,
      street: data.street,
      number: data.number,
      complement: data.complement,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
    });
    navigate("/success");
  };

  const itemsTotal = shoppingCart
    .reduce((total, item) => {
      const sum = total + item.price * item.qty;
      return sum;
    }, 0)
    .toFixed(2);

  const total = parseFloat(itemsTotal) + 3.5;

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CompleteYourOrderColumn>
        <Title>Complete your order</Title>

        <AddressInfoCard register={register} errors={errors} />

        <PaymentCard />
      </CompleteYourOrderColumn>

      <SelectedCoffeeColumn>
        <Title>Selected Coffees</Title>

        <SelectedCoffeesBox>
          {shoppingCart.map((item) => {
            return <Item item={item} key={item.name} />;
          })}

          <PriceRow>
            <h6>Items total</h6>

            <h5>$ {itemsTotal}</h5>
          </PriceRow>

          <PriceRow>
            <h6>Delivery</h6>

            <h5>$ 3.50</h5>
          </PriceRow>

          <TotalRow>
            <h6>Total</h6>

            <h5>$ {total}</h5>
          </TotalRow>

          <Button>CONFIRM ORDER</Button>
        </SelectedCoffeesBox>
      </SelectedCoffeeColumn>
    </Form>
  );
}
