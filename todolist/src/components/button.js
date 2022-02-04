import React from "react";

export default function Button(props){
    return(
        <button onclick={props.onclick} style={props.style} className={props.className}>{props.name}</button>
    );
}