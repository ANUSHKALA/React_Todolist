import React from "react";
function Backdrop(props){

    var back = {
        position: 'fixed',
        'z-index': 1,
        'background-color': 'rgba(0, 0, 0, 0.75)',
        width: '100%',
        height: '100vh',
        top: 0,
        left: 0,
      }


    return(
        <div className = 'backdrop' style = {back} onClick = {props.onClick} />
    );
}

export default Backdrop;