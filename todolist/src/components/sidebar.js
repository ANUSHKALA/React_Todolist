import React  from "react";
import Button from "./button";


export default function Sidebar(){
    
    const sidebarstyle = {
        width: "280px",
        minHeight: "93.9vh",
    }
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark "  style={sidebarstyle}>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                <Category category="Studies"/>
                <Category category="Shopping list"/>
                <Category category="Remember this"/>
                <Category category="Category"/>
                <Category category="Category"/>
            </ul>
            <Button className="btn btn-outline-info" name="+"/>
            <hr/>
        </div>
    );
}

function Category(props){
    return(
      <li>
        <a href="" className="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use href={props.href}/></svg>

        {props.category}
        </a>
      </li>
    );
}
