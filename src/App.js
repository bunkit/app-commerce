import React from "react";
import { Slider } from "./components";
import { Header } from "./containers";
import { Container } from "./style-util/globalStyle";



const App = () => {
    const keyword = ["chair", "couch", "table", "furniture", "lamp", "cabinet"];
    return (
        <>
            <Header />
            <Slider>
                {keyword.map((i, idx) => {
                    let keyword = `https://source.unsplash.com/1200x600/?${i}`;
                    let index = idx;
                    return (
                        <Slider.Item color="red">
                            <Container>
                                <Slider.Img
                                    style={{}}
                                    key={index}
                                    src={keyword}
                                    alt=""
                                />
                            </Container>
                        </Slider.Item>
                    );
                })}
            </Slider>
        </>
    );
};

export default App;
