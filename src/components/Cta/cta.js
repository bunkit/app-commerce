import React from "react";
import { Container, Item } from "./style";

const Cta = ({ children, ...resProps }) => {
    return <Container>{children}</Container>;
};

Cta.Item = ({ children, ...resProps }) => {
    return <Item {...resProps}>{children}</Item>;
};

export default Cta;
