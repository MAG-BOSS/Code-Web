import React,{useState,useEffect} from "react";
import {useDebounce} from "use-debounce";

import Editor from "../components/Editor/Editor";
import Page from "../components/Questions/Page";
import "./App.css";

const App = ()=>{
    const [htmlVal, sethtml]=useState(null);
    const [cssVal, setcss]=useState(null);
    const [jsVal,setjs]=useState(null);
    const [output,setOutput]=useState("");

    const dhtml=useDebounce(htmlVal,250);
    const dcss=useDebounce(cssVal,250);
    const djs=useDebounce(jsVal,250);

    
    useEffect(()=>{
        const out = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <style>
            ${dcss}
          </style>
        </head>
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
                <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                </label>
            </div>
            <div className="editor-pane">
                <Editor className="html-code" type="HTML" value={htmlVal} mode="htmlmixed" onBeforeChange={(editor,data,htmlVal)=>{sethtml(htmlVal)}}/>
                <Editor className="css-code" type="CSS" value={cssVal} mode="css" onBeforeChange={(editor,data,cssVal)=>{setcss(cssVal)}}/>
                <Editor className="js-code" type="JS" value={jsVal} mode="javascript" onBeforeChange={(editor,data,jsVal)=>{setjs(jsVal)}}/>
            </div>
            <div className="result-pane">
                <h1 className="result-header">RESULT</h1>
                <iframe srcDoc={output} title="Output"/>
            </div>
            <div className="question-pane">
                <Page/>
            </div>
        </div>
       
    )
}

export default App;