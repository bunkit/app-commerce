// logo
// navigations
// cta

import React from "react";
import { Navigation, Logo, Cta, IconSet } from "../components";
import { ContainerHeader, HeaderFull } from "../style-util/globalStyle";
const Header = () => {
    let dataHeader = ["Home", "Bed", "Chair", "Couch", "Table", "Others"];
    return (
        <HeaderFull>
            <ContainerHeader>
                <Navigation>
                    {dataHeader.map((item) => (
                        <Navigation.Item href="#res">{item}</Navigation.Item>
                    ))}
                </Navigation>
                <Logo link="#" />
                <Cta>
                    <Cta.Item href="#red">
                        <IconSet icon="search"  />
                    </Cta.Item>
                    <Cta.Item href="#red">
                        <IconSet icon="heart"  />
                    </Cta.Item>
                    <Cta.Item href="#red">
                        <IconSet icon="user"  />
                    </Cta.Item>
                    <Cta.Item href="#red">
                        <IconSet icon="shopping-cart"  />
                    </Cta.Item>
                </Cta>
            </ContainerHeader>
        </HeaderFull>
    );
};

export default Header;
