import React, {FC, useState, useRef, MouseEvent} from 'react'
import styled from 'styled-components'

import TabList from './TabList';

type prop = {
  title: string[]
}

const Tab:FC<prop> = ({title}) => {
  const createRandom = () => Math.random().toString(32).substring(2)
  const randomId: string[] = [];

  for (let i = 0, len = title.length; i < len; i++) {
    randomId.push(`tab-${createRandom()}`)
  }

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
      </div>
    </TabSC>
  )
};

const TabSC:FC = styled.div`
`

export default Tab
