import React,{useRef} from "react";

import UserChoice from "./UserChoice";
import {getTasks} from "../tasks/Tasks";
import "./Header.css";

const Header =()=>{
    const choice = useRef(null);
    console.log(choice);
    const Tasks = getTasks();
    return(
        <div className="header">
            <h1>Question</h1>
            <div className="userChoice-list">
            <UserChoice id="userChoice" tasks={Tasks} ref={choice}/>
            </div>
        </div>
    )
}

export default Header;