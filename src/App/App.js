import React,{useState,useEffect} from "react";
import {useDebounce} from "use-debounce";

import Editor from "../components/Editor/Editor";
import "./App.css";

const App = ()=>{
    const [html, sethtml]=useState(null);
    const [css, setcss]=useState(null);
    const [js,setjs]=useState(null);
    const [output,setOutput]=useState("");

    const dhtml=useDebounce(html,1000);
    const dcss=useDebounce(css,1000);
    const djs=useDebounce(js,1000);

    
    useEffect(()=>{
        const out = `<html>
        <style>
        ${dcss}
        </style>
        <body>
        ${dhtml}
        <script type="text/javascript">
        ${djs}
        </script>
        </body>
        </html>`;
        setOutput(out);
    },[dhtml,dcss,djs]);

    return(
        <div className="app">
            <div className="app-header">
                <h1>CODEWEB</h1>
            </div>
            <div className="editor-pane">
                <Editor className="html-code" type="HTML" value={html} mode="htmlmixed" onBeforeChange={(editor,data,html)=>{sethtml(html)}}/>
                <Editor className="css-code" type="CSS" value={css} mode="css" onBeforeChange={(editor,data,css)=>{setcss(css)}}/>
                <Editor className="js-code" type="JS" value={js} mode="javascript" onBeforeChange={(editor,data,js)=>{setjs(js)}}/>
            </div>
            <div className="bottom-pane">
                <p>Hello</p>
                
            </div>
        </div>
       
    )
}

export default App;