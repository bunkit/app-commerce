import React from "react";
import { Slider } from "./components";
import { Header } from "./containers";
import { color} from './style-util/configStyle';



const App = () => {
    return (
        <>
            <Header />
            <Slider>
                <Slider.Item color={color.brownSpringWood}>
                    <Slider.Container>
                        <Slider.Left>
                            <Slider.Title>DWAIN</Slider.Title>
                            <Slider.Subtitle>
                                The most confortable couch
                            </Slider.Subtitle>
                            <Slider.Detail>
                                Elit anim eu reprehenderit et excepteur cillum ex Lorem proident est veniam ut elit. 
                            </Slider.Detail>
                            <Slider.Link href="#" >Explore Now</Slider.Link>
                        </Slider.Left>
                        <Slider.Right>
                            <Slider.Product>
                                <Slider.Img src="https://source.unsplash.com/1200x600/?chair" alt="aaa"/>
                                <Slider.Promo>
                                    <span>NOW ONLY</span>
                                    <span>$44</span>
                                </Slider.Promo>
                            </Slider.Product>
                        </Slider.Right>
                    </Slider.Container>
                </Slider.Item>
            </Slider>
        </>
    );
};

export default App;
