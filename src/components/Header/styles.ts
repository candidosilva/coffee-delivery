import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 104px;
  padding: 0 10rem;
`;

export const HeaderContainerRight = styled.div`
  display: flex;
  gap: 12px;

  span {
    font-size: 0.875rem;
    text-align: center;
  }
`;

export const Localization = styled.div`
  height: 38px;
  padding: 8px;
  border-radius: 6px;
  display: flex;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
`;

export const ShoppingCart = styled.div`
  position: relative;
  border-radius: 6px;
  background-color: ${(props) => props.theme["yellow-light"]};

  a {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemsCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -10px;
`;
