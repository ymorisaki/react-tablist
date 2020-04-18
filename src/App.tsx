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
          <Hoge>
            <p><b>Tab1</b></p>
            <button type="button">フォーカスチェック</button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.</p>
          </Hoge>,
          <Fuga />,
          <Piyo />
        ]}
      />
    </>
  );
}

export default App;
