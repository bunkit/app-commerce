import React from "react";
import { Container } from "./style";

const Cta = ({ children, ...resProps }) => {
    return <Container>{children}</Container>;
};

export default Cta;
