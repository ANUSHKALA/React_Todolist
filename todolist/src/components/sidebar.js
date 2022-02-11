import React  from "react";
import Button from "./button";
import CategoryForm from "./categoryform";
import axios from 'axios';
import Category from "./category";
import { updateCategorystate } from "../Main/mainpage";
import { setTaskCategory } from "./AddTaskPopup";


class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            thiscategory:1,
            category: []
        };
    }

    handleCategoryChange=(category)=>{
        updateCategorystate(category)
        setTaskCategory(category)
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
    
        
    }

    handleEdit(category){
        document.getElementById(category.id).style.display = "block";
        document.getElementById("category"+category.id).style.display = "none";  

    }
    

    render(){
        const buttonstyle ={
            marginBottom:"30px",
            marginTop:"6px",
            marginLeft : "13px"
        }
        const sidebarstyle = {
            width: "200px",
            minHeight: "100%",
        }

        const addCategory=()=>{
            document.getElementById("categoryform").style.display = "block";
            document.getElementById("addbutton").style.display = "none";          
        }

        let categories = [] 

        for(let i=0; i<this.state.category.length;i++){
            categories.push(
                <div >
                    <div className="categorybox" id={"category"+this.state.category[i].id}>
                        <section>
                            <Category onClick={()=>this.handleCategoryChange(this.state.category[i])} category={this.state.category[i].name} />
                            <Button className="btn btn-sm btn-outline-secondary" id={"editbutton"+this.state.category[i].id}  name="Edit" onClick={()=>this.handleEdit(this.state.category[i])} />
                        </section>
                    </div>
                    <CategoryForm head={"Rename "+this.state.category[i].name} name="SAVE" id={this.state.category[i].id} defaultvalue={this.state.category[i].name}/>
                </div>
                
            )
        }


        return(
            <div className="d-flex flex-column flex-shrink-0 p-1 text-white bg-dark"  style={sidebarstyle}>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li><h5 className="nav-link text-white"><strong>CATEGORIES</strong></h5></li>
    
                    <Button onClick={()=>addCategory()} id="addbutton" className="btn btn-sm btn-outline-info" name="ADD MORE" style={buttonstyle}/>
                    <CategoryForm head="ADD MORE" name="ADD" id="categoryform"/>
                    {categories}
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Sidebar