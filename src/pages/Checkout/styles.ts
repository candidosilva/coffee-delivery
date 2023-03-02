import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  margin: 0 10rem;
  margin-top: 40px;
`;

export const CompleteYourOrderColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;
  width: 60%;
`;

export const Title = styled.p`
  font-size: 1.125rem;
  color: ${(props) => props.theme["base-subtitle"]};
  font-weight: bold;
  font-family: "Baloo 2";
  margin-bottom: 15px;
`;

export const SelectedCoffeeColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 16px;
`;

export const SelectedCoffeesBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;
  border-radius: 6px 44px 6px 44px;
`;

export const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  color: ${(props) => props.theme["base-text"]};

  h6 {
    font-weight: normal;
    font-size: 0.875rem;
  }

  h5 {
    font-weight: normal;
    font-size: 1rem;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  color: ${(props) => props.theme["base-subtitle"]};

  h6,
  h5 {
    font-weight: bold;
    font-size: 1.25rem;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 12px;
  border-radius: 6px;
  color: ${(props) => props.theme["white"]};
  font-size: 0.875rem;
  font-weight: bold;
  background-color: ${(props) => props.theme["yellow"]};

  :hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Form = styled.form`
  display: flex;
  margin: 0 10rem;
  margin-top: 40px;
`;
