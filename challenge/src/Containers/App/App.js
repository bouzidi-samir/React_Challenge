import './App.css'
import React, { Component } from "react";
import Eleve from '../../Components/Eleve/Eleve';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('App.js Constructor');
    } 

    state = {
        eleves: [
            {name: 'Eva Dupont', moyenne: 15/20},
            {name: 'Sam Bouzidi', moyenne: 12/20}
        ]
    }

    //Monté -> Branche
    componentDidMount() {
        console.log('App.js componentDidMount' )
    }

    //Modifié -> Modification
    componentDidUpdate() {
        console.log('App.js componentDidUpdate' )
    }
    
    //Démonté -> Débranche 
    componentWillUnmount() {
        console.log('App.js componentWillUnMount' );
    }


    buttonClickHandler = (newName) => {

        const nouveauState = [...this.state.eleves];
        nouveauState[0].name = newName;       
        this.setState({
            ...this.state, 
            eleves: nouveauState
        });
    }
    
    render() {
        return (
            <div className='App'>

                <h1>Bienvenue dans la classe:</h1>
                
                <button onClick={this.buttonClickHandler}>Changer l'élément 1</button>
                
                <Eleve 
                    name={this.state.eleves[0].name} 
                    moyenne={this.state.eleves[0].moyenne}
                    clic={ () => this.buttonClickHandler('Lea')}
                >    
                </Eleve>

            </div>

        )
    }
}

/*
  STATEFULL / CONTAINER : gere un state.
  STATELESS / comopnenet : ne gere pas de state. 
*/


export default App;