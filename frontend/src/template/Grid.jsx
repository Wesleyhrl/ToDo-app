import React from "react";

export default function Grid(props){

    function toCssClass(numbers) {
        const col = numbers ? numbers.split(' ') : [];
        let cssClass = '';
        if(col[0]) cssClass += `col-${col[0]} `;
        if(col[0]) cssClass += `col-md-${col[1]} `;
        if(col[0]) cssClass += `col-lg-${col[2]} `;
        return (cssClass);
    }
    return (
        <div className={toCssClass(props.cols || 12)}>
            {props.children}
        </div>
    )
}