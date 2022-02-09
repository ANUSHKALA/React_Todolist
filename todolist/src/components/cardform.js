import React from "react";
import axios from 'axios';

class CardForm extends React.Component { 
    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }


    render() {
    
        return (
        <div class="card bg-dark" id={this.props.id}>
        <h5>{this.props.head}</h5>
        <br/>
        <form onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="taskname"
                ref={node => (this.inputNode = node)}

                onChange={this.handleChange}
                id = {this.props.id}
            />
            <input
                type="text"
                name="taskdescription"
                ref={node => (this.inputNode = node)}

                onChange={this.handleChange}
                id = {this.props.id}
            />
            <input
                type="checkbox"
                name="iscompleted"
                ref={node => (this.inputNode = node)}
         
                onChange={this.handleChange}
                id = {this.props.id}
            />
            <button class="btn btn-sm btn-success" type="submit">{this.props.name}</button>
            
        </form>
        <button   onClick={()=>this.cancelButton(this.props.id)} class="btn btn-sm btn-secondary" type="submit">Cancel</button>
        </div>
        )
    }
}

export default CardForm