import React from 'react'
import './App.css';

import Auth from './Components/Auth/Auth'

const App = () => {

  return (
    <div className="App">

      <div style={{display: 'flex', justifyContent:'center', alignItems:'center', minHeight: '100vh'}}>
        <Auth />
      </div>


    </div>
  );
}

export default App;
