import React from "react";
import { Container, Item } from "./style";

const Navigation = ({ children, ...resProps }) => {
    return <Container {...resProps}>{children}</Container>;
};
export default Navigation;

Navigation.Item = ({ children, ...resProps }) => {
    return (
        <Item {...resProps} href={resProps.href}>
            {children}
        </Item>
    );
};
