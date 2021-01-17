import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {useDebounce} from "use-debounce";
import {useDispatch} from "react-redux";

import {getData} from "../actions/userActions"; 
import Editor from "../components/Editor/Editor";
import Page from "../components/Questions/Page";
import "./App.css";

const App = ()=>{
    const [htmlVal, sethtml]=useState(null);
    const [cssVal, setcss]=useState(null);
    const [jsVal,setjs]=useState(null);
    const [output,setOutput]=useState(null);

    const dhtml=useDebounce(htmlVal,250);
    const dcss=useDebounce(cssVal,250);
    const djs=useDebounce(jsVal,250);
    const data = useSelector(state => state.auth);
    console.log(data);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData());
    },[]);
    const temp = useSelector(state => state.user);
    console.log(temp);

    useEffect(()=>{
        const out = `<html><head><title>Document</title><style> ${dcss ? dcss : null} </style></head><body> ${dhtml ? dhtml : null} <script type="text/javascript"> ${djs} </script></body></html>`;
        setOutput(out);
    },[dhtml,dcss,djs]);

    return(
        <div className="app">
            <div className="editor-pane">
                <Editor className="html-code" type="HTML" value={htmlVal} mode="htmlmixed" onBeforeChange={(editor,data,htmlVal)=>{sethtml(htmlVal)}}/>
                <Editor className="css-code" type="CSS" value={cssVal} mode="css" onBeforeChange={(editor,data,cssVal)=>{setcss(cssVal)}}/>
                <Editor className="js-code" type="JS" value={jsVal} mode="javascript" onBeforeChange={(editor,data,jsVal)=>{setjs(jsVal)}}/>
            </div>
            <div className="result-pane">
                <div className="result-header">
                    <h1>RESULT</h1>
                    <button className="submit-button">Submit</button>
                </div>
                <iframe srcDoc={output} title="Output"/>
            </div>
            <div className="question-pane">
                <Page/>
            </div>
        </div>
       
    )
}

export default App;