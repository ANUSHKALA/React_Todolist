import React from "react";

export default function Category(props){
    return(
      <li>
        <p onClick={props.onClick} className="nav-link text-white category" id={props.category}>
        {props.category}
        </p>
      </li>
    );
}
