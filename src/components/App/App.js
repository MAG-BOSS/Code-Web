import React,{useState} from "react";

import Editor from "../Editor/Editor";
import "./App.css";

const App = ()=>{
    const [html, sethtml]=useState(null);
    const [css, setcss]=useState(null);
    const [js,setjs]=useState(null);

    return(
        <div>
            <div className="top-pane">
               
                <Editor type="HTML" value={html} mode="htmlmixed" onBeforeChange={(editor,data,html)=>{sethtml(html)}}/>
                
                <Editor type="CSS" value={css} mode="css" onBeforeChange={(editor,data,css)=>{setcss(css)}}/>
                <Editor type="JS" value={js} mode="javascript" onBeforeChange={(editor,data,js)=>{setjs(js)}}/>
            </div>
            <div className="bottom-pane">
                <iframe >

                </iframe>
            </div>
        </div>
       
    )
}

export default App;