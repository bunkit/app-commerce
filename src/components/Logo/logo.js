import React from "react";
import { Container } from "./style";

const Logo = ({ link }) => {
    return (
        <Container>
            <a href={link}>Kayoo.</a>
        </Container>
    );
};

export default Logo;
