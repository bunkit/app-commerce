import Styled from "styled-components/macro";

export const Container = Styled.div`
    font-size:16px;
    font-weight: 500;
    display:flex;
    flex-grow: 1;
    max-width: 50%;
    flex-wrap: wrap;
    flex-basis:100%
`;
export const Item = Styled.a`
    padding: 0 10px;   
    font-size:16px;
    &:hover {
        color:#F8A585
    }
`;
