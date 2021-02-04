import React,{useState,useEffect} from "react";
import {useSelector} from "react-redux";
import {useDebounce} from "use-debounce";
import {useDispatch} from "react-redux";

import {getData,updatePost} from "../actions/userActions"; 
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

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getData());
    },[dispatch]);

    const userChoice = useSelector(state => state.choice);

    const temp = useSelector(state => state.user);
    const score = temp.find( p => p._id == data.user.id);
    score?console.log(score.solved_questions):console.log('h');

    const [submitData , setSubmitData] = useState({solved_questions:'',codes_submitted:''});
    const tempFunction = () =>{
        if(score){
        setSubmitData({...submitData,solved_questions:score.solved_questions});
        setSubmitData({...submitData,codes_submitted:score.codes_submitted});
        };
    };
    useEffect(()=>{
            tempFunction();
    },[dispatch]);
    const handleClick = () =>{
        const tempData = score;
        setSubmitData({...submitData,solved_questions:score.solved_questions})
    };
    const handleSubmit = () =>{
        dispatch(updatePost(data.user.id,submitData));
    }
    
    useEffect(()=>{
        const out = `<html><head><title>Document</title><style> ${dcss ? dcss : null} </style></head><body> ${dhtml ? dhtml : null} <script type="text/javascript"> ${djs} </script></body></html>`;
        setOutput(out);
    },[dhtml,dcss,djs]);

    return(
        <div className="app">
            <div className="navbar navbar-expand-lg navbar-light bg-secondary d-flex" style={{height:'30px'}}><h6 className="userGreet">Hello {data.user.name} !</h6>
                <p style={{marginTop : '1%' , marginLeft : '45%', backgroundColor: '#383838', width:'auto', paddingLeft:'9px',color:'green',paddingRight:'9px',borderRadius:'10px'}}>SCORE :{score?score.score:null} </p>
            </div>
            <div className="editor-pane">
                <Editor className="html-code" type="HTML" value={htmlVal} mode="htmlmixed" onBeforeChange={(editor,data,htmlVal)=> sethtml(htmlVal)}/>
                <Editor className="css-code" type="CSS" value={cssVal} mode="css" onBeforeChange={(editor,data,cssVal)=>setcss(cssVal)}/>
                <Editor className="js-code" type="JS" value={jsVal} mode="javascript" onBeforeChange={(editor,data,jsVal)=>setjs(jsVal)}/>
            </div>
            <div className="result-pane">
                <div className="result-header">
                    <h1>RESULT</h1>
                    <a href="#popup2" className="submit-button">Submit</a>
                </div>
                <div id="popup2" className="overlay">
	                <div className="popup">
		                <h2>Submission Form</h2>
                        <br/>
                        <h6>Instructions:</h6>
                        <p>1. Once submitted you will not be able to modify your submission.<br/>2. Incorrect ID will lead to zero marks.<br/>3. Checking can take upto 2 days. So, be patient.</p>
		                <a className="close" href="#" onClick={handleSubmit}>&times;</a>
		                <div className="content">
                            <p>You are going to submit the code for question ID : {userChoice}</p>
                            <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
		                </div>
	                </div>
                </div>
                <iframe srcDoc={output} title="Output"/>
            </div>
            <div className="question-pane">
                <Page />
            </div>
        </div>
       
    )
}

export default App;