import { ButtonStyled } from "./button.styled.js";

export const Button = ({ textValue, size }) => {
  const getButtonSize = (size) => {
    switch (size) {
      case "small":
        return "10px";
      case "medium":
        return "12px";
      default:
      case "large":
        return "15px";
    }
  };

  return <ButtonStyled size={getButtonSize(size)}>{textValue}</ButtonStyled>;
};
