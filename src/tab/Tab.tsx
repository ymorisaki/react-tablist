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
    e.currentTarget.closest('ul[role="tablist"]')?.querySelectorAll('a').forEach(node => {
      node.tabIndex = -1
      node.setAttribute('aria-selected', 'false')
    })
    e.currentTarget.tabIndex = 0
    e.currentTarget.setAttribute('aria-selected', 'true')
  }

  const keyMoveCurrent = (e: KeyboardEvent<HTMLAnchorElement>, target: Element | null | undefined) => {
    if (target) {
      e.currentTarget.tabIndex = -1
      target.querySelector('a')?.focus()
      target.querySelector('a')?.setAttribute('tabindex', '0')
      setTabState(`${target.querySelector('a')?.getAttribute('aria-controls')}`)
      e.currentTarget.setAttribute('aria-selected', 'false')
      target.querySelector('a')?.setAttribute('aria-selected', 'true')
    }
  }

  const handleKey = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === 'ArrowRight') {
      keyMoveCurrent(e, e.currentTarget.parentElement?.nextElementSibling)
    }
    if (e.key === 'ArrowLeft') {
      keyMoveCurrent(e, e.currentTarget.parentElement?.previousElementSibling)
    }
  }

  return (
    <TabSC>
      <ul role="tablist">
        {title.map((title: string, index: number) => (
          <li key={randomId.current[index]}>
            <a
              href={`#${randomId.current[index]}`}
              tabIndex={index === 0 ? 0 : -1}
              role="tab"
              aria-controls={randomId.current[index]}
              aria-selected={index === 0 ? 'true' : 'false'}
              onClick={(e) => handleClick(e)}
              onKeyDown={(e) => handleKey(e)}
            >
              {title}
            </a>
          </li>
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
  margin-bottom: 100px;

  > ul[role="tablist"] {
    display: flex;
    padding: 0;

    > li {
      margin-top: 0;
      margin-bottom: 0;
      list-style: none;
      background-color: #ddd;

      > a {
        display: block;
        padding: 10px 30px;
        text-decoration: none;
        color: #000;

        &[aria-selected="true"] {
          background-color: #000;
          color: #fff;
        }
      }
    }
  }

  div[role="tabpanel"] {
    padding: 20px 40px;
    border: 1px solid #ccc;

    p {
      margin-bottom: 20px;
      line-height: 1.6;
    }

    b {
      font-weight: normal;
      font-size: 22px;
    }

    button {
      margin-bottom: 20px;
      padding: 5px 20px;
      border: 2px solid #ccc;
      border-radius: 10px;
    }
  }
`

export default Tab
