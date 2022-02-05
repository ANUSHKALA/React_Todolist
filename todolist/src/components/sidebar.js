import React  from "react";
import Button from "./button";


export default function Sidebar(props){

        const buttonstyle ={
            "margin-top":"6px",
            "margin-left" : "13px"
        }
        const sidebarstyle = {
            width: "180px",
            minHeight: "100%",
        }

        return(
            <div className="d-flex flex-column flex-shrink-0 p-1 text-white bg-dark"  style={sidebarstyle}>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li><p className="nav-link text-white"><strong>CATEGORIES</strong></p></li>
                    {props.categories}
                    <Button onClick={props.onClick} className="btn btn-sm btn-outline-info" name="ADD MORE" style={buttonstyle}/>
                </ul>
                <hr/>
            </div>
        );
}



