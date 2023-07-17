import React from 'react';
import './App.css';
import Login from './component/auth';

const App=()=>{
  
   
fetch("")
.then((response) => response.json())
.then((data) => console.log(data));

    return (
      <div className="App">
      <Login/>
      </div>
    );

}

export default App;
