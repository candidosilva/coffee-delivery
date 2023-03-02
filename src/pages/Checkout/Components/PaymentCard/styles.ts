import styled from "styled-components";

export const PaymentBox = styled.div`
  margin-top: 12px;
  padding: 40px;
  border-radius: 6px;
  background-color: ${(props) => props.theme["base-card"]};

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

export const PaymentOptionBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

interface PaymentOptionProps {
  selected: boolean;
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px;
  background-color: ${(props) => {
    const selected = props.selected;
    if (selected) return props.theme["purple-light"];
    return props.theme["base-button"];
  }};
  border-radius: 6px;
  border: 1px solid
    ${(props) => {
      const selected = props.selected;
      if (selected) return props.theme["purple"];
      return props.theme["base-button"];
    }};
  color: ${(props) => props.theme["base-text"]};
  cursor: pointer;
  :hover {
    color: ${(props) => props.theme["base-subtitle"]};
    background-color: ${(props) => props.theme["base-hover"]};
  }
`;
