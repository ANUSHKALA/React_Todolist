import Card from "./components/mainpage";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Todolist(){
    return(
        <>
          <Navbar />
            <Sidebar/>
            <Card/>
        </>

    );
 
}

