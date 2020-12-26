import React from "react";
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
        scrollbarStyle: null,
        lineWrapping: true
    };
    return(
        <div>
            <button>Expand</button>
            <button>Collapse</button>
            <CodeMirror  value={props.value} options={{mode:props.mode,...codeMirrorOptions}} onBeforeChange={props.onBeforeChange} />
        </div>
    )
}

export default Editor;