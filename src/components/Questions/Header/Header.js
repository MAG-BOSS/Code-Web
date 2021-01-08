import React from "react";

import UserChoice from "./UserChoice";
import {getTasks} from "../tasks/Tasks";
import "./Header.css";

const Header =()=>{
    const Tasks = getTasks();
    return(
        <div className="header">
            <h1>Question</h1>
            <div className="userChoice-list">
            <UserChoice  tasks={Tasks}/>
            </div>
        </div>
    )
}

export default Header;