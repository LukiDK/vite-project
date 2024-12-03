import styled from 'styled-components';

export const ButtonStyled = styled.button`
    border: solid 1px #000;
    padding: .5rem;
    font-size: ${(props) => props.size};
`;