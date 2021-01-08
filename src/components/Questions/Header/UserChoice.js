import React from "react";

const UserChoice = (props)=>{
    return(
        <form>
            <label for="qid">Chhose :</label>
            <select name="qid" id="userChoice">
            {(props.tasks).map(( prop ) => (<option value={prop.id}>{prop.id}</option>))}
            </select>
        </form>
    )
}

export default UserChoice;