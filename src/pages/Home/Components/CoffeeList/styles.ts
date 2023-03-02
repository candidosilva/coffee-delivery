import styled from "styled-components";

export const Main = styled.main`
  margin: 2rem 10rem;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-family: "Baloo 2";
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme["base-title"]};
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme["yellow"]};
  border-radius: 100px;
  padding: 6px 12px;
  color: ${(props) => props.theme["yellow-dark"]};
  font-weight: bold;
  font-size: 0.625rem;
  margin-left: 8px;
`;

export const Body = styled.div`
  margin: 3.375rem 0;

  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(4, auto);
  row-gap: 40px;
  column-gap: 20px;
`;

export const Card = styled.div`
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
`;

export const CoffeeImage = styled.img`
  width: 120px;
  margin: 0 auto;
  margin-top: -20px;
  margin-bottom: 12px;
`;

export const CoffeeType = styled.div`
  text-align: center;
  padding: 4px 8px;
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  border-radius: 100px;
  font-size: 0.625rem;
  font-weight: bold;
  width: fit-content;
  margin-right: 4px;
  margin-bottom: 16px;
`;

export const CoffeeTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  font-family: "Baloo 2";
  color: ${(props) => props.theme["base-subtitle"]};
  text-align: center;
  margin-bottom: 8px;
`;

export const CoffeeDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-label"]};
  text-align: center;
  margin: 0 20px;
  margin-bottom: 33px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
    margin-right: 4px;
  }

  p {
    font-size: 1.5rem;
    font-family: "Baloo 2";
    font-weight: bolder;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const CountBox = styled.div`
  display: flex;
  height: 38px;
  align-items: center;
  background-color: ${(props) => props.theme["base-button"]};
  border-radius: 6px;
  padding: 8px;
  margin-right: 8px;

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["base-title"]};
    margin: 0 4px;
  }
`;

export const CartBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 38px;
  background-color: ${(props) => props.theme["purple-dark"]};
  border-radius: 6px;
  cursor: pointer;
`;
