import React from "react";
import Button from "./button";

export default function Card(props){
    const buttonstyle ={
        margin:"3px",
    }

    const  descriptionstyle ={
        "overflow-y":"scroll",
        height:"90px",

    }

    const titlestyle={
        "overflow-y":"scroll",
        height:"25px",
    }
    

    return(
        <>
        
            <div className="card text-white bg-dark mb-3 box-shadow">
                <div className="card-header" >
                    <h5 className="card-title hidescroll" style={titlestyle}>{props.title}</h5>
                </div>
                <div className="card-body">
                <p className="card-text hidescroll" style={descriptionstyle}>{props.description}</p>
                </div>
                <div className="card-footer">
                <div className="row">
                    <Button className="btn btn-sm btn-success" name="DONE" style={buttonstyle} />
                    <Button onClick={props.onEdit()} className="btn btn-sm btn-warning" name="EDIT" style={buttonstyle}/>
                    <Button onClick={props.onDelete} className="btn btn-sm btn-danger"  name="DELETE" style={buttonstyle}/>
                </div>
                </div>
            </div>
        </>


    );
}


