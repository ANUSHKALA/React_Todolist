import React  from "react";
import Button from "./button";
import CategoryForm from "./categoryform";
import axios from 'axios';
import Category from "./category";
import { updateCategorystate } from "../Main/mainpage";


class Sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            thiscategory:1,
            category: [],
        };
    }

    handleCategoryChange=(category)=>{
        updateCategorystate(category)
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

    render(){
        const buttonstyle ={
            "margin-top":"6px",
            "margin-left" : "13px"
        }
        const sidebarstyle = {
            width: "180px",
            minHeight: "100%",
        }

        const addCategory=()=>{
            document.getElementById("addcategory").style.visibility = "visible";
            document.getElementById("addbutton").style.visibility = "hidden";           
        }

        let categories = [] 

        for(let i=0; i<this.state.category.length;i++){
            categories.push(
                <Category onClick={()=>this.handleCategoryChange(this.state.category[i].id)} category={this.state.category[i].name} />
              
            )
        }


        return(
            <div className="d-flex flex-column flex-shrink-0 p-1 text-white bg-dark"  style={sidebarstyle}>
                <hr/>
                <ul className="nav nav-pills flex-column mb-auto">
                <li><p className="nav-link text-white"><strong>CATEGORIES</strong></p></li>
                    {categories}
                    <Button onClick={()=>addCategory()} id="addbutton" className="btn btn-sm btn-outline-info" name="ADD MORE" style={buttonstyle}/>
                    <CategoryForm id="addcategory" style={{"visibility":"hidden"}}/>
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Sidebar