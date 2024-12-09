import styled from "styled-components";

export const ButtonStyled = styled.button`
  font-size: ${(props) => props.$size};
  background-color: ${(props) => props.$color};
  color: ${(props) => props.$fontcolor};
  border: none;
  padding: 10px;
  cursor: pointer;
`;