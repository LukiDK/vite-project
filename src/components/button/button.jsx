import { ButtonStyled } from "./button.styled.js";

export const Button = ({ textValue, size, theme }) => {
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

    const getButtonColor = (theme) => {
        switch (theme) {
            case "light":
                return "#ffffff"; // white color for light theme
            case "dark":
                return "#000000"; // black color for dark theme
            default:
                return "#ffffff"; // default to light theme color
        }
    };

    const getFontColor = (theme) => {
        switch (theme) {
            case "light":
                return "#000000"; // black font color for light theme
            case "dark":
                return "#ffffff"; // white font color for dark theme
            default:
                return "#000000"; // default to dark font color
        }
    };

    return (
        <ButtonStyled
            size={getButtonSize(size)}
            color={getButtonColor(theme)}
            fontColor={getFontColor(theme)}
        >
            {textValue}
        </ButtonStyled>
    );
};
