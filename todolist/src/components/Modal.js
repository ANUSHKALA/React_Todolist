import React from "react";
export default function Modal(props){

    function cancelHandeler(){
        props.onCancel();   
    }

    function confirmHandeler(){
        props.onConfirm();
    }

    var popup = {
        'box-shadow': '0 1px 4px rgba(0, 0, 0, 0.2)',
        'border-radius': '6px',
        'background-color': 'white',
        padding: '1rem',
        'text-align': 'center',
        width: "30rem",
        'z-index': 10,
        position: 'fixed',
        top: '20vh',
        left: 'calc(50% - 15rem)'
      }

    var btn1 = {
        font: 'inherit',
        padding: '0.5rem 1.5rem',
        cursor: 'pointer',
        'border-radius': '4px',
        'background-color': '#800040',
        color: 'rgb(179, 162, 162)',
        border: '1px solid #58032e',
        margin: '0 1rem'
      }


      var btn2 = {
        'background-color': 'transparent',
        color: '#800040'
      }
      
      var modal =  {
        'box-shadow': '0 1px 4px rgba(0, 0, 0, 0.2)',
        'border-radius': '6px',
        'background-color': 'white',
        padding: '1rem',
        'text-align': 'center',
        width: '30rem',
        'z-index': 10,
        position: 'fixed',
        top: '20vh',
        left: 'calc(50% - 15rem)',
      }

      var card = {
        'background-color': 'white',
        'border-radius': '4px',
        'box-shadow': '0 1px 4px rgba(0, 0, 0, 0.2)',
        padding: '1rem',
        width: '20rem',
      }

    return(
        <div className = 'modal' style = {modal}>
        <p>Are you sure??</p>
        <button style = {btn1} className = 'btn btn--alt' onClick = {cancelHandeler} >Cancel</button>
        <button style = {btn2} className = 'btn' onClick = {confirmHandeler}>Confirm</button>
        </div>
    );
}

