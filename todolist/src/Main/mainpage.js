import React from "react";
import Card from "../components/card";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import axios from 'axios';
import PropTypes from 'prop-types';
import AddTaskPopup from "../components/AddTaskPopup";
import EditTaskPopup from "../components/EditTaskPopup";


export function updateCategorystate(thiscategory) {
    this.setState({thiscategory : thiscategory.id, thiscategoryname : thiscategory.name, })
}


class Page extends React.Component {

    rooturl = "http://localhost:8000"
    
    constructor(props) {
        super(props);
        this.state = {
            thiscategory:"",
            thiscategoryname:"",
            category: [],
            task : [],
            check : false,
            show: false,
            edit: false,
        }
        updateCategorystate = updateCategorystate.bind(this);
    }


    componentDidMount() {
  
        let data ;

        axios.get(this.rooturl+'/category-list/')
        .then(res => {
            data = res.data;
            this.setState({
                thiscategory : data[0].id,
                thiscategoryname:data[0].name,
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
        this.setState({edit : false});
    }

    handleEdit=(id)=>{

        axios.delete(this.rooturl+'/task-delete/'+id+"/")
        .then(res =>{
            window.location.reload(false);
        });

        this.setState({edit : true});


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
            top: '80px',
            right: '40px',
            position: 'fixed'
        }

        let category = this.state.thiscategory;



        let cards =[]
        const task = this.state.task
        for (let i=0;i<task.length;i++){
            if (category === task[i].category){
                cards.push(
                    <div className="col-md-4">
                        <Card id='card' onDelete={()=>this.handleDelete(task[i].id,task[i].category)} onEdit={() => this.handleEdit} title={task[i].title} description={task[i].description}/>
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
                <section>
                <h4>{this.state.thiscategoryname}</h4>
                <button className='btn btn-lg btn-primary' style={btn}  onClick={()=>this.handleShow(this.state.show)} > + </button>
                </section>
                    <div className="row">   
                     {cards} 
        
                    </div>

                    <EditTaskPopup trigger={this.state.edit} setTrigger={()=>this.handleDontShow(this.state.edit)} />
                    <AddTaskPopup trigger={this.state.show} setTrigger={()=>this.handleDontShow(this.state.show)} />  
 
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