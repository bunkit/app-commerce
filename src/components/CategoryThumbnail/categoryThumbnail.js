import React from "react";
import Masonry from "react-masonry-css";
import { Container } from "../../style-util/globalStyle";

const CategoryThumnail = ({ children, ...resProps }) => {
    let itemsList = [
        {
            id: 1,
            name:
                "My First Item Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aux veniam reprehenderit sunt do nulla mollit aute incididunt. ",
        },
        {
            id: 2,
            name:
                "Another item sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaec",
        },
        { id: 3, name: "Third Item" },
        {
            id: 4,
            name:
                "Her sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sune is the Fourth",
        },
        {
            id: 5,
            name:
                "High  sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nFive",
        },
        {
            id: 6,
            name:
                "Another item sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaec",
        },
        { id: 7, name: "Third Item" },
        {
            id: 8,
            name:
                "Her sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sune is the Fourth",
        },
        {
            id: 9,
            name:
                "High  sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nFive",
        },
        {
            id: 10,
            name:
                "Another item sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaecat anim eu elit ex veniam reprehenderit sunt do nulla mollit aute incididunt. Occaec",
        },
    ];
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 2,
        500: 1,
    };

    // Convert array to JSX items
    let items = itemsList.map(function (item, idx) {
        return (
            <div key={item.id}>
                <h2>{idx}</h2>
                {item.name}
            </div>
        );
    });
    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {items}
            </Masonry>
        </Container>
    );
};

export default CategoryThumnail;
