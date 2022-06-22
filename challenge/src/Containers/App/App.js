import './App.css'
import React, {useState, useEffect} from 'react';
import Eleve from '../../Components/Eleve/Eleve';


function App() {

    //STATE:

    const [eleves, setEleves] = useState( 
        [ 
            {name: 'Eva Dupont', moyenne: 15/20},
            {name: 'Sam Bouzidi', moyenne: 12/20}
        ]
    );
        
    //LIFE CYCLE: 
    
    useEffect(() => {
        
    });

    //FUNCTIONS:

    const buttonClickHandler = (newName) => {
        const newEleves = [...eleves];
        newEleves[0].name = newName;
        setEleves(newEleves);
     }
    
    //JSX
         return (
            <div className='App'>

                <h1>Bienvenue dans la classe:</h1>
                
                <button onClick={buttonClickHandler.bind(this, 'Léa')}>Changer l'élément 1</button>
              <Eleve 
                   name={eleves[0].name} 
                    moyenne={eleves[0].moyenne}>
                    
               </Eleve>
           </div>

        )
}

export default App;