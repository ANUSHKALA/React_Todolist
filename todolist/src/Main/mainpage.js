import React from "react";
import Card from "../components/card";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Category from "../components/category";
import axios from 'axios';
import Button from "../components/button";
import CategoryForm from "../components/categoryform";
import ReactDOM  from "react";



export function updateCategorystate(thiscategory) {
    this.setState({thiscategory : thiscategory})
}

class Page extends React.Component {
    
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

        axios.get('http://localhost:8000/category-list/')
        .then(res => {
            data = res.data;
            this.setState({
                category : data    
            });
        })
        .catch(err => {
            console.log(err)
        })
     
  
        axios.get('http://localhost:8000/task-list/')
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


    render() {
        const cardstyle ={
            "overflow-y":"scroll",
            height:"91.8vh",
            margin:"13px",
            padding:"20px",
            "WebkitFlex": "1",
            "msFlex": "1",
            flex: "1" 
        }



        let category = this.state.thiscategory;

        let cards =[]
        for (let i=0;i<this.state.task.length;i++){
            if (category === this.state.task[i].category){
                cards.push(
                    <div className="col-md-4">
                        <Card title={this.state.task[i].title} description={this.state.task[i].description}/>
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
                    {cards}
                </div>
                </div>
            </section>
            </>
        );
    }
}

export default Page 

