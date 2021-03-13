import React from "react";

const UnderLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1,
            width: 150
        }}
    />
);

export default UnderLine;