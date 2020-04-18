import React, {FC, useState, useRef, MouseEvent, KeyboardEvent} from 'react'
import styled from 'styled-components'

import TabList from './TabList';
import TabContent from './TabContent';

type prop = {
  title: string[]
  content: any[]
}

const Tab:FC<prop> = ({title, content}) => {
  const randomStr = () => Math.random().toString(32).substring(2)
  const randomId:{current: string[]} = useRef([]);
  const renderCount:{current: number} = useRef(0)

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
    e.currentTarget.closest('ul[role="tablist"]')?.querySelectorAll('a').forEach(node => node.tabIndex = -1)
    e.currentTarget.tabIndex = 0
  }

  const handleKey = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'ArrowRight') {
      if (e.currentTarget.parentElement?.nextElementSibling) {
        e.currentTarget.tabIndex = -1
        e.currentTarget.parentElement?.nextElementSibling.querySelector('a')?.setAttribute('tabindex', '0')
        e.currentTarget.parentElement?.nextElementSibling.querySelector('a')?.focus()
      }
    }
    if (e.key === 'ArrowLeft') {
      if (e.currentTarget.parentElement?.previousElementSibling) {
        e.currentTarget.tabIndex = -1
        e.currentTarget.parentElement?.previousElementSibling.querySelector('a')?.focus()
        e.currentTarget.parentElement?.previousElementSibling.querySelector('a')?.setAttribute('tabindex', '0')
      }
    }
  }

  return (
    <TabSC>
      <ul role="tablist">
        {title.map((title: string, index: number) => (
          <TabList key={randomId.current[index]}>
            <a
              href={`#${randomId.current[index]}`}
              tabIndex={index === 0 ? 0 : -1}
              role="tab"
              aria-controls={randomId.current[index]}
              aria-selected={index === 0 ? true : false}
              onClick={(e) => handleClick(e)}
              onKeyDown={(e) => handleKey(e)}
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
