import {React, useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal"

export default function Button(props){

    const  [modalIsOpen, setModatIsOpen] = useState(false);




    function buttonHandler(){
        setModatIsOpen(true);
      }
    
    function closeModalHandeler(){
        setModatIsOpen(false);
    }

    return(
        <>
            <div>
                <button onClick = {props.onClick} style={props.style} className={props.className}>{props.name}</button>
                {/* {modalIsOpen && <Modal onCancel = {closeModalHandeler} onConfirm = {closeModalHandeler}/>} */}
                {/* {modalIsOpen && <Backdrop onClick = {closeModalHandeler}/>} */}
            </div>
        </>
    );
}