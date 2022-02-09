import React from 'react';
import '../CSS/popup.css' 



function AddTaskPopup(props) {


        return(props.trigger) ? (
            <>
        
        <div className='popup'>


            <div className='popup-inner'>
                <button className="close-btn btn-dark" onClick={() => props.setTrigger()}>x</button>
                <form>
                    <div className="form-group">
                        <label>Task</label>
                            <input className="form-control" /*id="exampleInputEmail1"*/ aria-describedby="emailHelp" placeholder="New task"/>
                    </div>
                    <div className="form-group">
                        <label >Description</label>
                        <input className="form-control" /*id="exampleInputPassword1"*/ placeholder="about your task"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" >Done</label>
                    </div>
                    <button type="submit" className="btn btn-primary">ADD</button>
                </form>
                {props.children}
            </div>


        </div>
            
            </>
        ) : "" ;


}


export default AddTaskPopup;
