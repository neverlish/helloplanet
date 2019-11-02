import styled from "styled-components";

interface LineProps {
  isHorizontal?: boolean;
  length?: number | string;
  weight?: number;
  color?: string;
};

const Line = styled.div<LineProps>`
  width: ${(p: LineProps) => 
  typeof p.length === "string" ? p.length : `${p.length}px`};
  height: ${(p: LineProps) => `${p.weight}px`};
  background-color: ${(p: LineProps) => p.color};
`;

Line.defaultProps = {
  color: "#666666",
  isHorizontal: true,
  length: "100%",
  weight: 1,
};

export default Line;