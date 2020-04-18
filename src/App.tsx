import React from 'react';
import logo from './logo.svg';
import './App.css';

import Tab from './tab/Tab'
import Hoge from './component/Hoge'
import Fuga from './component/Fuga'
import Piyo from './component/Piyo'

function App() {
  return (
    <>
      <Tab
        title={['Tab1', 'Tab2', 'Tab3']}
        content={[<Hoge />, <Fuga />, <Piyo />]}
      />
    </>
  );
}

export default App;
