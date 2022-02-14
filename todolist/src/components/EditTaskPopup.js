import axios from 'axios';
import React,{useState} from 'react';
import '../CSS/popup.css';



  
// {
// let element = document.getElementById('addtaskbtn');
// element.onClick =  myFunction;



// }

export function setTaskCategory(thiscategory) {
    this.setState({cat:thiscategory.id});
}

class EditTaskPopup extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            check:false,
            cat:1,
        }
        setTaskCategory = setTaskCategory.bind(this)
    }


    handleDelete=(cat,category)=>{
        axios.delete(this.rooturl+'/task-delete/'+cat+"/")
        .then(res =>{
            window.location.reload(false);
        });
    }




    addTask = async () => {
    
        console.log(this.state.check)

        var tsk = document.getElementById('tsknm').value;
        var desc = document.getElementById('desc').value;


        
        axios.post('http://127.0.0.1:8000/task-add/', 
        { 
            title : tsk,
            description : desc,
            is_complete : this.state.check,
            category : this.state.cat,
        })

        .then(res => {
            console.log(res);
            window.location.reload(false);})


            document.getElementById('edit').onClick (
                this.handleDelete()
             );
    }



    render(){


        // const  [check,setCheck] = useState(false);

        // const  [cat,setCat] = useState()
    
        var handleCheck = (e) => {
            this.setState({check:!this.state.check});
            //console.log(check);
    
        }
        // document.getElementById('edit').onclick(
        //     console.log('hyyyyy')
        //     //do stuff...
        //     // handleDelete();
        // )
    
            return(this.props.trigger) ? (
                <>
            
            <div className='popup'>
    
    
                <div className='popup-inner'>
                    <button className="close-btn btn-dark" onClick={() => this.props.setTrigger()}>x</button>
                    <form>
                        <h3>Edit Task</h3>
                        <div className="form-group">
                            <label>Task</label>
                                <input id='tsknm' className="form-control" /*id="exampleInputEmail1"*/ aria-describedby="emailHelp" placeholder="Edit task"/>
                        </div>
                        <div className="form-group">
                            <label >Description</label>
                            <input id='desc' className="form-control" /*id="exampleInputPassword1"*/ placeholder="Edit task description"/>
                        </div>
                        <div className="form-check">
                            <input id="donecheck" type="checkbox" onChange={() => handleCheck()} className="form-check-input"/>
                            <label className="form-check-label" >check</label>
                        </div>
                        <button type="button"  onClick={() => this.addTask()} id='edit' className="btn btn-success ">SAVE EDIT</button>
                        <button type="button"  onClick={() => this.props.setTrigger()} className="btn btn-danger mx-4">CANCEL</button>                        
                    </form>
                    {this.props.children}
                </div>
    
    
            </div>
                
                </>
            ) : "" ;
    
    


    }
}


export default EditTaskPopup;
