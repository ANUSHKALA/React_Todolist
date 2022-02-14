import React from "react";
import axios from 'axios';

class CategoryForm extends React.Component { 
    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleSubmit = (event) => {
        document.getElementById("categoryform").style.display= "none";
        document.getElementById(event.target.categoryname.id).style.display= "none";
        document.getElementById("addbutton").style.display = "block";
        
        event.preventDefault();
        const input = event.target.categoryname.value
        const id = event.target.categoryname.id


        if (input.indexOf(" ")>0 || input.length>0){

            if (id != "categoryform"){
                axios.post('http://localhost:8000/category-update/'+id+"/", { name : this.state.name })
                .then(res => {window.location.reload(false);})
            }
            else{
            
                axios.post('http://localhost:8000/category-create/', { name : this.state.name })
                .then(res => {window.location.reload(false);})
            }
        }
        else{
            console.log("Not valid input")
        }
    }
    
    cancelButton=(id)=>{
        document.getElementById(id).style.display= "none";
        document.getElementById("addbutton").style.display = "block";
        document.getElementById("category"+id).style.display = "block";
    }

    render() {
        const textboxstyle ={
            width: "100%",
            "background-color":"lightgrey",
            "padding" : "3px 13px",
            "box-sizing": "border-box",
            "border": "3px",
            "margin-bottom":"20px",
            "border-radius": "4px",
        }

        const formstyle = {
            "border-color":'black',
            "display":"none",
            "padding":"15px",
            "margin" : "10px",
        }

        const buttonstyle ={
            "margin-left" : "13px",
            "margin-top" : "5px",
        }

        return (
        <div class="card bg-dark" style={formstyle} id={this.props.id}>
        <h5>{this.props.head}</h5>
        <br/>
        <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="categoryname"
                ref={node => (this.inputNode = node)}
                style = {textboxstyle}
                onChange={this.handleChange}
                defaultValue={this.props.defaultvalue}
                id = {this.props.id}
            />
            <section>
            <button style={buttonstyle} class="btn btn-sm btn-success" type="submit">{this.props.name}</button>
            <button  style={buttonstyle} onClick={()=>this.cancelButton(this.props.id)} class="btn btn-sm btn-secondary" type="submit">Cancel</button>
            </section>
            
        </form>
        </div>
        )
    }
}

export default CategoryForm