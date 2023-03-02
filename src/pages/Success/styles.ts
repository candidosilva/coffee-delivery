import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  margin: 0 10rem;
  margin-top: 80px;

  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  h2 {
    margin-top: 4px;
    margin-bottom: 40px;
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CardBox = styled.div`
  border-radius: 6px 36px 6px 36px;
  padding: 1px;
  background: linear-gradient(to bottom right, #dbac2c, #8047f8);
`;

export const Border = styled.div`
  padding: 40px;
  border-radius: 6px 36px 6px 36px;
  background: ${(props) => props.theme["background"]};
`;

export const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const PurpleCircle = styled(Circle)`
  background-color: ${(props) => props.theme["purple"]};
`;
export const YellowCircle = styled(Circle)`
  background-color: ${(props) => props.theme["yellow"]};
`;
export const YellowDarkCircle = styled(Circle)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const TextNormal = styled.p`
  font-weight: normal;
  color: ${(props) => props.theme["base-text"]};
`;

export const BoldText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme["base-text"]};
`;

export const ImageRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
