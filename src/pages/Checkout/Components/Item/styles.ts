import styled from "styled-components";

export const Title = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 8px;
`;

export const CountBox = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 6px 8px;
  border-radius: 6px;
  align-items: center;
  gap: 4px;

  p {
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const DeleteBox = styled.div`
  display: flex;
  background-color: ${(props) => props.theme["base-button"]};
  padding: 6px 8px;
  border-radius: 6px;
  align-items: center;
  gap: 4px;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Price = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme["base-text"]};
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 24px 0;
  background-color: ${(props) => props.theme["base-button"]};
`;
