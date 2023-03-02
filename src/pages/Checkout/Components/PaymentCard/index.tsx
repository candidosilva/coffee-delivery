import { AddressContext } from "contexts/addressContext";
import { CreditCard, CurrencyDollar, Bank, Money } from "phosphor-react";
import { useContext, useState } from "react";
import { Column, Row } from "styles/baseStyles";
import { PaymentBox, PaymentOption, PaymentOptionBox } from "./styles";

export function PaymentCard() {
  const { address, updateAddress } = useContext(AddressContext);
  const [selected, setSelected] = useState(0);
  const payment = {
    0: "Credit Card",
    1: "Debit Card",
    2: "Money",
  };

  function handleSelected(selected: number) {
    setSelected(selected);
    updateAddress({
      ...address,
      payment: payment[selected as keyof typeof payment],
    });
  }

  return (
    <PaymentBox>
      <Row>
        <CurrencyDollar width={13} color="#8047F8" />

        <Column>
          <h2>Payment</h2>
          <h3>Payment is made on delivery. Choose the payment method.</h3>
        </Column>
      </Row>

      <PaymentOptionBox>
        <PaymentOption
          selected={selected === 0}
          onClick={() => handleSelected(0)}
        >
          <CreditCard color="#8047F8" height="15" />
          <div>CREDIT CARD</div>
        </PaymentOption>
        <PaymentOption
          selected={selected === 1}
          onClick={() => handleSelected(1)}
        >
          <Bank color="#8047F8" height="15" />
          <div>DEBIT CARD</div>
        </PaymentOption>
        <PaymentOption
          selected={selected === 2}
          onClick={() => handleSelected(2)}
        >
          <Money color="#8047F8" height="15" />
          <div>MONEY</div>
        </PaymentOption>
      </PaymentOptionBox>
    </PaymentBox>
  );
}
