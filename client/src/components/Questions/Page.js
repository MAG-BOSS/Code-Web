import React,{useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import {getTasks} from "../Questions/tasks/Tasks";
import "./Page.css";
import { GET_ALL } from "../../actions/types";

const Page = ()=>{
    const [userChoice, setUserChoice] = useState(1);
    const userId = (useSelector(state => state.auth.user)).id;
    const userData = useSelector(state => state.user);
    const submittedQuestion = (userData.find(p => p._id == userId));
    const submittedQuestions = submittedQuestion? submittedQuestion.solved_questions : null;
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch({type: GET_ALL, payload: 1});
    },[dispatch]);

    const handleChange = (e)=>{
        setUserChoice(e.target.value);
        dispatch({type: GET_ALL, payload: e.target.value});
    }
    var Tasks = getTasks();
    var filterTasks;
    if (submittedQuestions) {
        const questionsToBeDisplayed = (givenData) =>{
            return !submittedQuestions.includes(Tasks.id);
        };
        filterTasks = Tasks.filter(questionsToBeDisplayed);
    } else {
        filterTasks = Tasks;
    }
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