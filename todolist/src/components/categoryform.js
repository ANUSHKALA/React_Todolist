import React from "react";

export default function CategoryForm(props){
    const textboxstyle ={
        width: "80%",
        "padding" : "3px 13px",
        "box-sizing": "border-box",
        "border": "3px",
        "margin-left":"13px",
        "margin-bottom":"20px",
        "border-radius": "4px",
    }
    return(
        <form style={props.style} id={props.id}>
            <input type="text" style={textboxstyle} value={props.value} onChange={props.onChange}/>
        </form>
    );
}
