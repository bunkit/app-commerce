import React from "react";
import { Container, Title, Year, Img } from "./styles/card";

const Card = ({ children, ...restProps }) => {
    return <Container {...restProps}>{children}</Container>;
};
export default Card;

Card.Title = ({ children, ...restProps }) => (
    <Title {...restProps}>{children}</Title>
);
Card.Year = ({ children, ...restProps }) => (
    <Year {...restProps}>{children}</Year>
);
Card.Img = (props) => <Img {...props} />;
