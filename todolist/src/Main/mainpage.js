import React from "react";
import Card from "../components/card";
// import { this.state.task } from "../jsondata/Json";
// import { this.state.category } from "../jsondata/Json";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Category from "../components/category";
import axios from 'axios';

class Page extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            thiscategory:1,
            category: [],
            task : []
        };
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


    handleChange=(category)=>{
        this.setState({thiscategory:category})
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

        let categories = [] 

        for(let i=0; i<this.state.category.length;i++){
            categories.push(
                <Category onClick={()=>this.handleChange(this.state.category[i].id)} category={this.state.category[i].name} />
            )
        }
        
        return (
            <>
            <Navbar/>
            <section>
                <Sidebar onClick={this.saveStateToLocalStorage} categories={categories} className="sidebar"/>
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

