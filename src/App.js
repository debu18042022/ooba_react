import React  from 'react';
import './App.css';
import Bottomfirst from './Bottomfirst';
import Bottomsecond from './Bottomsecond';
import Bottomthird from './Bottomthird';
import Middlecomponent from './Middlecomponent';
import UpperComponent from './UpperComponent';
function App() {
  return (
    <div className="">
      <UpperComponent/>
      <Middlecomponent/>
      <Bottomfirst/>
      <Bottomsecond/>
      <Bottomthird/>
    </div>
  );
}

export default App;
