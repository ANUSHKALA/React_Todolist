import React from "react";
import Button from "./button";

export default function Page(){
    const mystyle = {
        padding :"20px",
        
    }
    const cardstyle ={
        margin:"13px",
        "-webkit-flex": "1",
        "-ms-flex": "1",
        flex: "1" 
    }
    return(
      <div className="card" style={cardstyle}>
        <div className="container" style={mystyle}>
            <div className="card-deck">
                <Card title="Buy chicken" description="fwefjwqcjewiqjciwq  ifjwedicji" />
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    </div>
    );
}

function Card(props){
    const buttonstyle ={
        margin:"1px",
    }
    const cardstyle={
        "-webkit-flex": "1",
        margin : "5px"
    }
    return(
        <div className="card mb-5 box-shadow" style={cardstyle}>
            <div className="card" >
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <div className="card-footer">
                <Button className="btn btn-sm btn-outline-success" name="DONE" style={buttonstyle} />
                <Button className="btn btn-sm btn-outline-warning" name="EDIT" style={buttonstyle}/>
                <Button className="btn btn-sm btn-outline-danger" name="DELETE" style={buttonstyle}/>
            </div>
        </div>
    );
}

