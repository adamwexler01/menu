import React from 'react';
import Title from './Title';
import Appetizers from './Appetizers';
import Main from './Main';
import './App.css';

//This will be the root component
function App() {
  return (
    <div className="App">
      <Title></Title>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <Appetizers/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
