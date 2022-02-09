import {React} from "react";


export default function Button(props){


    return(
        <>
            <div>
                <button id={props.id} onClick = {props.onClick} style={props.style} className={props.className}>{props.name}</button>
                {/* {modalIsOpen && <Modal onCancel = {closeModalHandeler} onConfirm = {closeModalHandeler}/>} */}
                {/* {modalIsOpen && <Backdrop onClick = {closeModalHandeler}/>} */}
            </div>
        </>
    );
}