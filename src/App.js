import React from "react";
import { Slider, CategoryThumnail, IconSet } from "./components";
import { Header } from "./containers";


const App = () => {
    return (
        <>
            <Header />
            <Slider />
            <CategoryThumnail />
            <IconSet icon="bg-square" size="500px" color="#627279" />
        </>
    );
};

export default App;
