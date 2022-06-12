import React, { Component } from "react";
import './Eleve.css';

class Eleve extends Component {
    constructor(props) {
        super(props);
        console.log('Eleve.js Constructor');
    } 

    componentDidMount() {
        console.log('Eleve.js componentDidMount' );
    }

    componentDidUpdate() {
        console.log('Eleve.js componentDidUpdate' )
    }

    componentWillUnmount() {
        console.log('Eleve.js componentWillUnMount' );
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name != nextProps.name)
            return true;
        return false;
    }

    render () {
        return (
            <div className="eleve">
                <h1 onClick={this.props.clic} >{this.props.name}</h1>
                <p>Moyenne: {this.props.moyenne} </p>
                <i>{this.props.children}</i>
            </div>
        )
    }

}

export default Eleve;