import React from "react";
import iconData from "../../assets/selection.json";
import IcomoonReact from "icomoon-react";
const IconSet = ({
    color = "inherit",
    size = "inherit",
    icon = "",
    ...restProps
}) => {
    // console.log(iconList(iconData));
    return (
        <IcomoonReact
            iconSet={iconData}
            color={color}
            size={size}
            icon={icon}
            {...restProps}
        />
    );
};

export default IconSet;
