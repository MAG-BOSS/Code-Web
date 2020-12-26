import React,{useState} from "react";

import Editor from "../Editor/Editor";

const App = ()=>{
    const [html, sethtml]=useState(null);
    const [css, setcss]=useState(null);
    const [js,setjs]=useState(null);

    return(
        <div>
            <div className="pane top-pane">
                <Editor value={html} mode="htmlmixed" onBeforeChange={(editor,data,html)=>{sethtml(html)}}/>
                <Editor value={css} mode="css" onBeforeChange={(editor,data,css)=>{setcss(css)}}/>
                <Editor value={js} mode="javascript" onBeforeChange={(editor,data,js)=>{setjs(js)}}/>
            </div>
            <div className="bottom-pane">
                <iframe >

                </iframe>
            </div>
        </div>
       
    )
}

export default App;