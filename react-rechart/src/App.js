import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';

import { useState } from 'react';

function App() {


  return (
    <div className="App">

      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>


    </div>
  );
}

export default App;
