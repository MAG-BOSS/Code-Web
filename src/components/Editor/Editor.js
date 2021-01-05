import React,{useState} from "react";
import {Controlled as CodeMirror} from "react-codemirror2";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

import "./Editor.css";

const Editor = ({...props})=>{
    const codeMirrorOptions = {
        theme : "material",
        lineNumbers : "true",
        scrollbarStyle: "native",
        lineWrapping: true
    };

    const [buttonState,setButtonState]=useState(false);

    return(
        <div className={"code-editor-" + (buttonState?"collapse":"full")}>
            <div className="code-header">
                <p>{props.type}</p>
                <button className="collapse-button" type="button" onClick={()=> setButtonState(buttonState? false:true)}>O/C</button>
                
                </div>
            <CodeMirror className="editor-box"  value={props.value} options={{mode:props.mode,...codeMirrorOptions}} onBeforeChange={props.onBeforeChange} />
        </div>
    )
}

export default Editor;