import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";

import {getTasks} from "../Questions/tasks/Tasks";
import "./Page.css";

const Page = ()=>{
    const [userChoice, setUserChoice] = useState(1);
    const userId = (useSelector(state => state.auth.user)).id;
    const userData = useSelector(state => state.user);
    const submittedQuestions = (userData.find(p => p._id == userId)).solved_questions;
    console.log(submittedQuestions);
    
    const handleChange = (e)=>{
        setUserChoice(e.target.value);
    }
    const questionsToBeDisplayed = (givenData) =>{
        return !submittedQuestions.includes(Tasks.id);
    };
    const Tasks = getTasks();
    const filterTasks = Tasks.filter(questionsToBeDisplayed);
    return(
        <div className="page">
            <div className="header">
                <h3>Question_{userChoice}</h3>
                <div className="userChoice-list">
                    <form>
                        <label>Choose :</label>
                            <select name="qid" id="userChoice" onChange={handleChange} >
                            {(filterTasks).map(( prop ) => (<option value={prop.id}>{prop.id} | maxScore: {prop.maxScore}</option>))}
                            </select>
                    </form>
                 </div>
                 <div className="box">
	                <a className="button" href="#popup1">Describe</a>
                </div>
                <div id="popup1" className="overlay">
	                <div className="popup">
		                <h2>{Tasks[userChoice-1].name}</h2>
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