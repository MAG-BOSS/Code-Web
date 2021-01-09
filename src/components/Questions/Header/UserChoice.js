import React , {useState} from "react";

const UserChoice = (props)=>{
    const [userChoice, setUserChoice] = useState(1);
    const handleChange = (e)=>{
        setUserChoice(e.target.value);
    }
    return(
        <form>
            <label for="qid">Chhose :</label>
            <select name="qid" id="userChoice" onChange={handleChange} >
            {(props.tasks).map(( prop ) => (<option value={prop.id}>{prop.id}</option>))}
            </select>
        </form>
    )
}

export default UserChoice;