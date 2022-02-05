import {Recat, useState} from 'react';
import Page from "./components/mainpage";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Todolist(){



    return(
        <>
          <Navbar/>
          <section>
            <Sidebar className="sidebar"/>
            <Page className="mainpage"/>
          </section>



        </>

    );
 
}

