import styled from "styled-components";
import background from "../../../../assets/background.svg";

export const HomeHeader = styled.header`
  height: 544px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10rem;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-title"]};
  }

  h2 {
    margin-top: 16px;
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Items = styled.div`
  margin-top: 66px;

  p {
    width: 250px;
  }
`;

export const BaseCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 12px;
`;

export const DarkYellowCircle = styled(BaseCircle)`
  background-color: ${(props) => props.theme["yellow-dark"]};
`;

export const YellowCircle = styled(BaseCircle)`
  background-color: ${(props) => props.theme["yellow"]};
`;

export const BlackCircle = styled(BaseCircle)`
  background-color: ${(props) => props.theme["base-text"]};
`;

export const PurpleCircle = styled(BaseCircle)`
  background-color: ${(props) => props.theme["purple"]};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
`;
