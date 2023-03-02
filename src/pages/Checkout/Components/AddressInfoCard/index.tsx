import { MapPin } from "phosphor-react";
import { Column, Row } from "styles/baseStyles";
import { AddressInfoBox, ErrorMenssage, Input } from "./styles";

export function AddressInfoCard({ register, errors }: any) {
  return (
    <AddressInfoBox>
      <Row>
        <MapPin color="#C47F17" />
        <Column>
          <h2>Delivery Address</h2>

          <h3>Inform the address where you want to recieve the order</h3>
        </Column>
      </Row>

      <Input {...register("cep")} type="number" placeholder="CEP" />
      <ErrorMenssage>{errors.cep?.message}</ErrorMenssage>
      <Input {...register("street")} type="text" placeholder="STREET" />
      <ErrorMenssage>{errors.street?.message}</ErrorMenssage>
      <Row>
        <Column width="30">
          <Input {...register("number")} type="number" placeholder="NUMBER" />
          <ErrorMenssage>{errors.number?.message}</ErrorMenssage>
        </Column>
        <Column width="70" ml="12">
          <Input
            {...register("complement")}
            type="text"
            placeholder="COMPLEMENT"
          />
          <ErrorMenssage>{errors.complement?.message}</ErrorMenssage>
        </Column>
      </Row>

      <Row>
        <Column width="30">
          <Input
            {...register("neighborhood")}
            type="text"
            placeholder="NEIGHBORHOOD"
          />
          <ErrorMenssage>{errors.neighborhood?.message}</ErrorMenssage>
        </Column>

        <Column width="60" ml="12" mr="12">
          <Input {...register("city")} type="text" placeholder="CITY" />
          <ErrorMenssage>{errors.city?.message}</ErrorMenssage>
        </Column>

        <Column width="10">
          <Input {...register("state")} type="text" placeholder="STATE" />
          <ErrorMenssage>{errors.state?.message}</ErrorMenssage>
        </Column>
      </Row>
    </AddressInfoBox>
  );
}
