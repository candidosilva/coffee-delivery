import styled from "styled-components";

export const AddressInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme["base-card"]};
  padding: 40px;
  border-radius: 6px;

  h2 {
    font-size: 1rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 32px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-input"]};
  border-radius: 4px;
  height: 42px;
  font-size: 0.875rem;
  color: ${(props) => props.theme["base-text"]};

  :focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
  }

  ::placeholder {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const ErrorMenssage = styled.p`
  font-size: 10px;
  color: red;
  margin-bottom: 16px;
`;
