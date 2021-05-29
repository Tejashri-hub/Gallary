import React from 'react';
import Addition, { Multiplication, Subtraction } from './Calculator';


function App(){
  return(
    <ol>
      <li>{Addition(5,2)}</li>
      <li>{Subtraction(5,2)}</li>
      <li>{Multiplication(5,2)}</li>
    </ol>
  );
}

export default App;