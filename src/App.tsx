import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tab from './tab/Tab'

function App() {
  return (
    <>
      <Tab title={['Tab1', 'Tab2', 'Tab3']} />
    </>
  );
}

export default App;
