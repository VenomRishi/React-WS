import React from 'react';
import './App.css';
import ClassCounter from './components/useState/ClassCounter';
import HookCounter from './components/useState/HookCounter'
// import HookUseEffect from './components/useEffect/HookUseEffect';
// import CustomizeClassCounter from './components/useEffect/CustomizeClassCounter';
// import CustomizeUseEffect from './components/useEffect/CustomizeUseEffect';
// import ClassMouse from './components/useEffect/ClassMouse';
import HookMouse from './components/useEffect/HookMouse';
import SetStateOnPrevState from './components/useState/SetStateOnPrevState';


function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <SetStateOnPrevState />
      {/* <HookUseEffect /> */}
      {/* <CustomizeClassCounter /> */}
      {/* <CustomizeUseEffect /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
    </div>
  );
}

export default App;
