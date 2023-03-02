import styled from "styled-components";

interface RowProps {
  align?: "center" | "end";
  justify?: "center" | "space-between" | "space-around";
  gap?: string;
  mr?: string;
  ml?: string;
  mt?: string;
  mb?: string;
  pr?: string;
  pl?: string;
  pb?: string;
  pt?: string;
}

interface ColumnProps {
  width?: string;
  mr?: string;
  ml?: string;
  mt?: string;
  mb?: string;
  pr?: string;
  pl?: string;
  pb?: string;
  pt?: string;
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: ${(props) => {
    const justify = props.align;
    if (justify === "center") return "center";
    if (justify === "end") return "end";
    return "start";
  }};

  justify-content: ${(props) => {
    const justify = props.justify;
    if (justify === "center") return "center";
    if (justify === "space-between") return "space-between";
    if (justify === "space-around") return "space-around";
    return "start";
  }};

  gap: ${(props) => {
    if (props.gap) return props.gap + "px";
  }};

  margin-right: ${(props) => {
    if (props.mr) return props.mr + "px";
  }};
  margin-left: ${(props) => {
    if (props.ml) return props.ml + "px";
  }};
  margin-top: ${(props) => {
    if (props.mt) return props.mt + "px";
  }};
  margin-bottom: ${(props) => {
    if (props.mb) return props.mb + "px";
  }};

  padding-right: ${(props) => {
    if (props.pr) return props.pr + "px";
  }};
  padding-right: ${(props) => {
    if (props.pl) return props.pl + "px";
  }};
  padding-top: ${(props) => {
    if (props.pt) return props.pt + "px";
  }};
  padding-bottom: ${(props) => {
    if (props.pb) return props.pb + "px";
  }};
`;

export const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;

  width: ${(props) => {
    const width = props.width;
    if (width !== undefined) return `${width}%`;
    return "auto";
  }};

  margin-right: ${(props) => {
    if (props.mr) return props.mr + "px";
  }};
  margin-left: ${(props) => {
    if (props.ml) return props.ml + "px";
  }};
  margin-top: ${(props) => {
    if (props.mt) return props.mt + "px";
  }};
  margin-bottom: ${(props) => {
    if (props.mb) return props.mb + "px";
  }};

  padding-right: ${(props) => {
    if (props.pr) return props.pr + "px";
  }};
  padding-right: ${(props) => {
    if (props.pl) return props.pl + "px";
  }};
  padding-top: ${(props) => {
    if (props.pt) return props.pt + "px";
  }};
  padding-bottom: ${(props) => {
    if (props.pb) return props.pb + "px";
  }};
`;
