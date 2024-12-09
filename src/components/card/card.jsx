import { CardStyled } from "./card.styled";

export const Card = ({ headerText, textValue }) => {
    return (
        <CardStyled>
            <h2>{headerText}</h2>
            <p>{textValue}</p>
        </CardStyled>
    );
};
