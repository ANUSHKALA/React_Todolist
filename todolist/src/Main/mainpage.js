import React from "react";
import Card from "../components/card";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import axios from 'axios';
import PropTypes from 'prop-types';
import AddTaskPopup from "../components/AddTaskPopup";


export function updateCategorystate(thiscategory) {
    this.setState({thiscategory : thiscategory})
}

class Page extends React.Component {

    rooturl = "http://localhost:8000"
    
    constructor(props) {
        super(props);
        this.state = {
            thiscategory:1,
            category: [],
            task : []
        }
        updateCategorystate = updateCategorystate.bind(this)
    }


    componentDidMount() {
  
        let data ;

        axios.get(this.rooturl+'/category-list/')
        .then(res => {
            data = res.data;
            this.setState({
                category : data    
            });
        })
        .catch(err => {
            console.log(err)
        })
     
  
        axios.get(this.rooturl+'/task-list/')
        .then(res => {
            data = res.data;
            this.setState({
                task : data    
            });
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    handleShow=()=>{
        this.setState({show : true});
        console.log('show state')
    }
    handleDontShow=()=>{
        this.setState({show : false});
    }

    handleDelete=(id,category)=>{
        axios.delete(this.rooturl+'/task-delete/'+id+"/")
        .then(res =>{
            window.location.reload(false);
        });
    }


    render() {
        const cardstyle ={
            "overflow-y":"scroll",
            height:"91.8vh",
            margin:"13px",
            padding:"20px",
            "WebkitFlex": "1",
            "msFlex": "1",
            flex: "1" }

            const btn = {
                font: 'inherit',
                cursor: 'pointer',
                height: '40px',
                'background-color': 'black',
                top: '120px',
                'position': 'relative'
              }

        let category = this.state.thiscategory;

        let cards =[]
        const task = this.state.task
        for (let i=0;i<task.length;i++){
            if (category === task[i].category){
                cards.push(
                    <div className="col-md-4">
                        <Card onDelete={()=>this.handleDelete(task[i].id,task[i].category)} title={task[i].title} description={task[i].description}/>
                    </div>
                )
            }
        }
        
        return (
            <>

            <Navbar/>
            <section>
                <Sidebar  className="sidebar"/>
                <div className="card" style={cardstyle}>
                <div className="row">   
                <button className='btn btn-primary mx-3' style={btn} type="primary" onClick={()=>this.handleShow(this.state.show)} /*onClick={()=>this.handleAddTask()}*/ > + </button>
                    {cards} 
                    <AddTaskPopup trigger={this.state.show} setTrigger={()=>this.handleDontShow(this.state.show)} />          
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Page 

Navbar.propTypes = {title: PropTypes.string,
    aboutText: PropTypes.string}

Navbar.defaultProps = {
title: "Task name",
description: "task decription"
}