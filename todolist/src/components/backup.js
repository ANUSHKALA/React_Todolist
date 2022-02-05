import {React, useState} from "react";
import { PropTypes } from "prop-types";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
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
        flex: "1",

    }

    const   [newTask, setNewTask] = useState(false);

    function showNewTaskbox(){
      setNewTask(true);
    }

    function AddCard(props){

        const buttonstyle ={
            margin:"3px",
            width:"60px",
            "WebkitFlex": "1",
            "msFlex": "1",
            flex: "1" ,

        }
        const addbtn = {
            'max-width': '50px',
            'max-length': '50px',
            height: '50px',
            'background-color': 'grey',
            /* Center vertically and horizontally */
            position: 'absolute',
            top: '50%',
            left: '50%',
            margin: '-25px 0 0 -25px',

        }
    
        return(
            <div className="card text-white mx-3 bg-dark mb-2 box-shadow " style={buttonstyle}>
            <div className="card-header" >
            </div>
            <div className="card-body">
                <div className="container">
                    <button style={addbtn}  onClick = {showNewTaskbox} >+</button>
                </div>
            </div>
            <div className="card-footer" >
            {/* {modalIsOpen && <Backdrop onClick = {closeModalHandeler}/>} */}
            </div>
        </div>
    );
}

const addbtn = {
    width: '50px',
    height: '50px',
    'background-color': 'grey',
    /* Center vertically and horizontally */
    top: '50%',
    left: '50%',
    margin: '-25px 0 0 -25px',
    'min-width': '500px',
    'max-width': '600px',
}

    return(
        <>
        <div className="card" style={cardstyle}>
            <div className="row">
                {Carddata.map((data,key)=>{
                    return(
                        <div className="col-md-3" id='acard'>
                            <Card /*title={data.name} description={data.description}*/ />
                        </div> 
                    );
                })}
                {newTask &&
                 <div className="col-md-3">
                    <Card />
                </div>}
                <AddCard className="col-md-3" id='newtask'/>
            </div>
            
      </div>
       
        </>

    );
}




function Card(props){
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

    const strike = {
        position: 'absolute',
        width: '100%',
        'border-top': '1px solid red',
        left: 0,
        top: '50%'
    }



function Strike(){

    {Carddata.map((data,key)=>{
        return(
            document.getElementById('a').style.cssText = 'text-decoration: line-through'
        );  
    })}
      
}

function strikeIfTrue(){

    {Carddata.map((data,key)=>{
        if(data.state == true){
            <div className="col-md-3" id='a'>
                <Strike />
            </div> 
        }
    })}
}
    return(
            <div className="card text-white bg-dark mb-3 box-shadow text-decoration-line">
                <div className="card-header" >
                    <h5 className="card-title hidescroll" style={titlestyle}>{props.title}</h5>
                </div>
                <div className="card-body">
                <p className="card-text hidescroll" style={descriptionstyle}>{props.description}</p>
                </div>
                <div className="card-footer">
                <div className="row">
                    <Button className="btn btn-sm btn-success" onClick = {strikeIfTrue}  name="DONE" style={buttonstyle} />
                    <Button className="btn btn-sm btn-warning" name="EDIT" style={buttonstyle}/>
                    <Button className="btn btn-sm btn-danger"   name="DELETE" style={buttonstyle}/>
                </div>
                {/* {modalIsOpen && <Backdrop onClick = {closeModalHandeler}/>} */}
                </div>
            </div>

    );
}

Card.propTypes = {title: PropTypes.string,
    aboutText: PropTypes.string}

Card.defaultProps = {
title: "Task Name",
description: "Task Description"
}