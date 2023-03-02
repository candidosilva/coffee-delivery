import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { Column, Row } from "styles/baseStyles";
import image from "assets/Illustration.svg";
import {
  Body,
  BoldText,
  Border,
  CardBox,
  ImageRow,
  PurpleCircle,
  TextNormal,
  YellowCircle,
  YellowDarkCircle,
} from "./styles";
import { useContext } from "react";
import { AddressContext } from "contexts/addressContext";

export function Success() {
  const { address } = useContext(AddressContext);

  return (
    <Body>
      <Column width="50">
        <h1>Yeah! Confirmed order</h1>
        <h2>Now just wait for the coffee to come to you soon</h2>

        <CardBox>
          <Border>
            <Row>
              <PurpleCircle>
                <MapPin color="#fff" weight="fill" />
              </PurpleCircle>
              <Column mb="32">
                <Row gap="6">
                  <TextNormal>Delivery at</TextNormal>
                  <BoldText>
                    {address.street}, {address.number}
                  </BoldText>
                </Row>
                <TextNormal>
                  {address.neighborhood}, {address.city}, {address.state}
                </TextNormal>
              </Column>
            </Row>

            <Row>
              <YellowCircle>
                <Clock color="#fff" weight="fill" />
              </YellowCircle>
              <Column mb="32">
                <TextNormal>Delivery time</TextNormal>
                <BoldText>20 min - 30 min</BoldText>
              </Column>
            </Row>

            <Row>
              <YellowDarkCircle>
                <CurrencyDollar color="#fff" weight="fill" />
              </YellowDarkCircle>

              <div>
                <TextNormal>Payment on delivery</TextNormal>
                <BoldText>{address.payment}</BoldText>
              </div>
            </Row>
          </Border>
        </CardBox>
      </Column>

      <ImageRow>
        <img src={image} alt="" />
      </ImageRow>
    </Body>
  );
}
