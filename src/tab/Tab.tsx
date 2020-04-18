import React, {FC, useState, useRef, MouseEvent} from 'react'
import styled from 'styled-components'

import TabList from './TabList';
import TabContent from './TabContent';

type prop = {
  title: string[]
  content: any[]
}

type id = {
  current: string[]
}

type count = {
  current: number
}

const Tab:FC<prop> = ({title, content}) => {
  const randomStr = () => Math.random().toString(32).substring(2)
  const randomId:id = useRef([]);
  const renderCount:count = useRef(0)

  if (renderCount.current === 0) {
    for (let i = 0, len = title.length; i < len; i++) {
      randomId.current.push(`tab-${randomStr()}`)
    }
    renderCount.current++
  }

  const [tabState, setTabState] = useState(randomId.current[0])

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setTabState(`${e.currentTarget.getAttribute('aria-controls')}`)
  }

  return (
    <TabSC>
      <ul role="tablist">
        {title.map((title: string, index: number) => (
          <TabList key={randomId.current[index]}>
            <a
              href={`#${randomId.current[index]}`}
              role="tab"
              aria-controls={randomId.current[index]}
              aria-selected={index === 0 ? true : false}
              onClick={(e) => handleClick(e)}
            >
        {title}
      </a>
          </TabList>
        ))}
      </ul>
      <div>
        {content.map((content, index) => (
          <TabContent
            id={randomId.current[index]}
            key={randomId.current[index]}
            state={tabState}
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
