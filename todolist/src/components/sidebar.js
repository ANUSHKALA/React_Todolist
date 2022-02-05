import React  from "react";
import Button from "./button";


export default function Sidebar(){
    
    const buttonstyle ={
        "margin-top":"6px",
        "margin-left" : "30px"
    }
    const sidebarstyle = {
        width: "200px",
        minHeight: "100%",
    }

    const categories  = [
    <Category category="Studies"/>,
    <Category category="Shopping list"/>,
    <Category category="Remember this"/>,
    <Category category="Category"/>,
    <Category category="Category"/>
    ]


    return(
        <div className="d-flex flex-column flex-shrink-0 p-2 text-white bg-dark "  style={sidebarstyle}>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto">
                {categories}
                <Button className="btn btn-sm btn-outline-info" name="ADD MORE" style={buttonstyle}/>
            </ul>
            <hr/>
        </div>
    );

}

function Category(props){
    return(
      <li>
        <a href="" className="nav-link text-white">
        <svg className="bi me-2" width="16" height="16"><use href={props.href}/></svg>
        {props.category}
        </a>
      </li>
    );
}
