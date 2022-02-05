import React from "react";
import Backdrop from "./Backdrop";
import Button from "./button";
import { Carddata } from "../jsondata/cards";

export default function Page(){


    const mystyle = {
        padding :"20px",
        
    }
    const cardstyle ={
        "overflow-y":"scroll",
        height:"91.8vh",
        margin:"13px",
        padding:"20px",
        "WebkitFlex": "1",
        "msFlex": "1",
        flex: "1" 
    }
    return(
      <div className="card" style={cardstyle}>
            <div className="row">
                {Carddata.map((data,key)=>{
                    return(
                        <div className="col-md-3" id={key}>
                            <Card title={data.name} description={data.description}/>
                        </div>
                    );
                })}
            </div>
      </div>
    );
}

function Card(props){
    const buttonstyle ={
        margin:"3px",
    }

    return(
            <div className="card text-white bg-dark mb-3 box-shadow">
                <div className="card-header" >
                    <h5 className="card-title">{props.title}</h5>
                </div>
                <div className="card-body">
                <p className="card-text">{props.description}</p>
                </div>
                <div className="card-footer">
                <div className="row">
                    <Button className="btn btn-sm btn-success" name="DONE" style={buttonstyle} />
                    <Button className="btn btn-sm btn-warning" name="EDIT" style={buttonstyle}/>
                    <Button className="btn btn-sm btn-danger"  name="DELETE" style={buttonstyle}/>
                </div>
                </div>
            </div>

    );
}

