import {React, useState} from "react";
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
        flex: "1" 
    }

    const   [newTask, setNewTask] = useState(false);

    function showNewTaskbox(){
      setNewTask(true);
    }


    return(
        <>
        <div className="card" style={cardstyle}>
            <div className="row">
                {Carddata.map((data,key)=>{
                    return(
                        <div className="col-md-3" id={key}>
                            <Card title={data.name} description={data.description}/>
                        </div> 
                    );
                })}
                {newTask && <Card />}
            </div>
            <button className = "newtask" onClick = {showNewTaskbox}>New Task</button>
      </div>
       
        </>

    );
}

function Card(props){
    const buttonstyle ={
        margin:"3px",
    }

<<<<<<< HEAD
 function buttonHandler(){
         setModatIsOpen(true);
       }
    
//  function closeModalHandeler(){
//          setModatIsOpen(false);
//      }

function doneHandler(){
    {Carddata.map((data,key)=>{
        return(
            setTaskIsDone(data.state)
        );
    })}
    }
    

const  [modalIsOpen, setModatIsOpen] = useState(false);
const  [taskIsDone, setTaskIsDone] = useState(true);


||||||| b060ef3
=======
    const  descriptionstyle ={
        "overflow-y":"scroll",
        height:"90px",

    }

    const titlestyle={
        "overflow-y":"scroll",
        height:"25px",
    }

>>>>>>> 93dd80a61863468c755f2f3d98ee9cf66750de2c
    return(
            <div className="card text-white bg-dark mb-3 box-shadow">
                <div className="card-header" >
                    <h5 className="card-title hidescroll" style={titlestyle}>{props.title}</h5>
                </div>
                <div className="card-body">
                <p className="card-text hidescroll" style={descriptionstyle}>{props.description}</p>
                </div>
                <div className="card-footer">
                <div className="row">
                    <Button className="btn btn-sm btn-success" onClick = {doneHandler} name="DONE" style={buttonstyle} />
                    <Button className="btn btn-sm btn-warning" name="EDIT" style={buttonstyle}/>
                    <Button className="btn btn-sm btn-danger" onClick = {buttonHandler}  name="DELETE" style={buttonstyle}/>

                </div>
                {/* {modalIsOpen && <Backdrop onClick = {closeModalHandeler}/>} */}
                </div>
            </div>

    );
}

