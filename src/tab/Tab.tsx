import React, {FC, useState, useRef, MouseEvent} from 'react'
import styled from 'styled-components'

import TabList from './TabList';
import TabContent from './TabContent';

type prop = {
  title: string[]
  content: any[]
}

const Tab:FC<prop> = ({title, content}) => {
  const createRandom = () => Math.random().toString(32).substring(2)
  const randomId: string[] = [];

  for (let i = 0, len = title.length; i < len; i++) {
    randomId.push(`tab-${createRandom()}`)
  }

  console.log(content)

  return (
    <TabSC>
      <ul role="tablist">
        {title.map((title: string, index: number) => (
          <TabList
            title={title}
            id={randomId[index]}
            key={randomId[index]}
            select={index === 0 ? true : false}
          />
        ))}
      </ul>
      <div>
        {content.map((content, index) => (
          <TabContent
            id={randomId[index]}
            key={randomId[index]}
          >
            {content}
          </TabContent>
        ))}
      </div>
    </TabSC>
  )
};

const TabSC:FC = styled.div`
`

export default Tab
