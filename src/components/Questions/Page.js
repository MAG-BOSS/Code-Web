import React from "react";

import Header from "./Header/Header";
import {getTasks} from "../Questions/tasks/Tasks";
import "./Page.css";

const Page = ()=>{
    const tasks = getTasks();
    return(
        <div className="page">
            <Header/>
            <iframe className="question-page" srcDoc={tasks[0].src} title="question"/>
        </div>
    )
}

export default Page;