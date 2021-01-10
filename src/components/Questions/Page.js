import React,{useState} from "react";

import {getTasks} from "../Questions/tasks/Tasks";
import "./Page.css";

const Page = ()=>{
    const [userChoice, setUserChoice] = useState(1);
    const handleChange = (e)=>{
        setUserChoice(e.target.value);
    }
    const Tasks = getTasks();
    return(
        <div className="page">
            <div className="header">
                <h1>Question_{userChoice}</h1>
                <div className="userChoice-list">
                    <form>
                        <label>Choose :</label>
                            <select name="qid" id="userChoice" onChange={handleChange} >
                            {(Tasks).map(( prop ) => (<option value={prop.id}>{prop.id} | maxScore: {prop.maxScore}</option>))}
                            </select>
                    </form>
                 </div>
                 <div className="box">
	                <a className="button" href="#popup1">Description</a>
                </div>
                <div id="popup1" className="overlay">
	                <div className="popup">
		                <h2>Question Description</h2>
		                <a className="close" href="#">&times;</a>
		                <div className="content">
			                <p>{Tasks[userChoice-1].description}</p>
		                </div>
	                </div>
                </div>
            </div>
            <iframe className="question-page" srcDoc={Tasks[userChoice-1].src} title="question"/>
        </div>
    )
}

export default Page;