import React, {useState} from 'react';
import '../App.css'

function SecondApp(){
    const [counter, setCounter] = useState(0);

    //function to handle click event
    function handleClick(){
        setCounter(preCount => preCount + 1)
    }
    function handleDecre(){
        setCounter(preCount => preCount -1)
    }
    return (
      <div className='main-div'>
          <h2>Magic of Javascript:</h2>
           <div className='magic'>
           <p className='p-counter'>{counter}</p>
           <button className='btn-plus' onClick = {handleClick}>+</button>
           <button className='btn-reset' onClick= {() => setCounter(0)}>Reset</button>
           <button className='btn-minus' onClick = {handleDecre}>-</button>
           </div>
      </div>
    )
      
    
  }
  export default SecondApp;