import React from "react";
import Backdrop from "./Backdrop";
import Button from "./button";

export default function Page(){
    const mystyle = {
        padding :"20px",
        
    }
    const cardstyle ={
        margin:"13px",
        padding:"6px",
        "WebkitFlex": "1",
        "msFlex": "1",
        flex: "1" 
    }

    return(
      <div className="card-body" style={cardstyle}>
            <div className="card-deck">
                <Card title="Buy chicken" description="aka kill the poor little innocent chicken:\" />
                <Card/>
                <Card/>
                <Card/>
            </div>
    </div>
    );
}

function Card(props){
    const buttonstyle ={
        margin:"3px",
    }
    const cardstyle={
        "WebkitFlex": "1",
        margin : "5px",
        "max-width": "18rem"
    }

    return(
        <>
        <div className="card text-white bg-dark mb-3" style={cardstyle}>
            <div className="card-header" >
                <h5 className="card-title">{props.title}</h5>
            </div>
            <div className="card-body">
            <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer row">
                <Button className="btn btn-sm btn-success" name="DONE" style={buttonstyle} />
                <Button className="btn btn-sm btn-warning" name="EDIT" style={buttonstyle}/>
                <Button className="btn btn-sm btn-danger"  name="DELETE" style={buttonstyle}/>
            </div>

        </div>
        </>

    );
}

