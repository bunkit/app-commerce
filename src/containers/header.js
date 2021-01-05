// logo
// navigations
// cta

import React from "react";
import { Navigation, Logo, Cta } from "../components";
import { ContainerHeader, HeaderFull } from "../style-util/globalStyle";
const Header = () => {
    return (
        <HeaderFull>
            <ContainerHeader>
                <Navigation>
                    <Navigation.Item href="#">Decor</Navigation.Item>
                    <Navigation.Item href="#">Kitchen Set</Navigation.Item>
                    <Navigation.Item href="#">Interior Design</Navigation.Item>
                    <Navigation.Item href="#">Other Categories</Navigation.Item>
                </Navigation>
                <Logo link="#" />
                <Cta>CTA</Cta>
            </ContainerHeader>
        </HeaderFull>
    );
};

export default Header;
