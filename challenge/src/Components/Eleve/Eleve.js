import React, {useState, useEffect} from "react";
import './Eleve.css';

function Eleve(props) {

    //ComponentDidMount:

    useEffect(() => {
        console.log("Eleve.js componentDidMount");
    }, []);

    //ComponentDidUpdate:

    useEffect(() => {
        console.log("Eleve.js componentDidUpdate");
    })

    //ComponentWillUnMount:

    useEffect(() => {
        return console.log("Eleve.js componentDidUnMount");
    }, [])

    //Moderateur:

    useEffect(() => {
        console.log("Eleve.js componentDidUpdate");
    }, [props.name])

    return (
        <div className="eleve">
            <h1 onClick={props.clic} >{props.name}</h1>
            <p>Moyenne: {props.moyenne} </p>
            <i>{props.children}</i>
        </div>
    );
    
}

export default Eleve;