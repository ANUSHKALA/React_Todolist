import React from "react";
import Card from "../components/card";
import { Carddata } from "../jsondata/cards";
import { Categorydata } from "../jsondata/category";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Category from "../components/category";



class Page extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          category: Categorydata[0].name
        };
    }

    handleChange=(category)=>{
        this.setState({category:category})
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

        let category = this.state.category;


        let cards =[]
        for (let i=0;i<Carddata.length;i++){
            if (category == Carddata[i].category){
                cards.push(
                    <div className="col-md-4">
                        <Card title={Carddata[i].name} description={Carddata[i].description}/>
                    </div>
                )
            }
        }

        let categories = [] 

        for(let i=0; i<Categorydata.length;i++){
            categories.push(
                <Category onClick={()=>this.handleChange(Categorydata[i].name)} category={Categorydata[i].name} />
            )
        }

        return (
            <>
            <Navbar/>
            <section>
                <Sidebar categories={categories} className="sidebar"/>
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