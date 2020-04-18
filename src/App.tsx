import React from 'react';

import Tab from './tab/Tab'
import Hoge from './component/Hoge'
import Fuga from './component/Fuga'
import Piyo from './component/Piyo'

function App() {
  return (
    <>
      <Tab
        title={['Tab1', 'Tab2', 'Tab3']}
        content={[
          <Hoge title={'Tab1'} />,
          <Fuga title={'Tab2'} />,
          <Piyo title={'Tab3'} />
        ]}
      />

      <Tab
        title={['Tab4', 'Tab5', 'Tab6', 'Tab7', 'Tab8']}
        content={[
          <Piyo title={'Tab4'} />,
          <Hoge title={'Tab5'} />,
          <Fuga title={'Tab6'} />,
          <Piyo title={'Tab7'} />,
          <Hoge title={'Tab8'} />
        ]}
      />
    </>
  );
}

export default App;
