import React  from "react";
import Button from "./button";


export default function Sidebar(){
    return(
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: "280px"}}>
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

            <div class="dropdown">
                <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser" data-toggle="dropdown" aria-expanded="false">
                    <strong>More</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <More option="Settings"/>
                    <More option="Profile"/>
                    <li><hr className="dropdown-divider"/></li>
                    <More option="Signout"/>
                </ul>
            </div>
        </div>
    );
}

function Category(props){
    return(
      <li>
        <a href="" className="nav-link text-white">
        <svg class="bi me-2" width="16" height="16"><use href="#grid"/></svg>
        {props.category}
        </a>
      </li>
    );
}

function More(props){
    return(
        <li><a className="dropdown-item" href="">{props.option}</a></li>
    );
}