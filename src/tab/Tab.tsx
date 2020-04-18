import React, {FC, useState, useRef, MouseEvent} from 'react'
import styled from 'styled-components'

const Tab: FC = () => {
  const [tabState, setTabState] = useState('tab-item-01')
  const listRef = useRef(null)

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setTabState(`${e.currentTarget.getAttribute('aria-controls')}`)
  }

  return (
    <TabSC>
      <ul role="tablist">
        <li role="presentation">
          <a
            className="tab-hook"
            role="tab"
            href="#tab-item-01"
            aria-controls="tab-item-01"
            aria-selected="true"
            onClick={(e) => handleClick(e)}
          >
            1
          </a>
        </li>
        <li role="presentation">
          <a
            className="tab-hook"
            role="tab"
            href="#tab-item-02"
            aria-controls="tab-item-02"
            aria-selected="false"
            onClick={(e) => handleClick(e)}
          >
            2
          </a>
        </li>
        <li role="presentation">
          <a
            className="tab-hook"
            role="tab"
            href="#tab-item-03"
            aria-controls="tab-item-03"
            aria-selected="false"
            onClick={(e) => handleClick(e)}
          >
            3
          </a>
        </li>
      </ul>
      <div>
        {tabState === 'tab-item-01' &&
          <div id="tab-item-01" role="tabpanel">
            1
          </div>
        }
        {tabState === 'tab-item-02' &&
          <div id="tab-item-02" role="tabpanel">
            2
          </div>
        }
        {tabState === 'tab-item-03' &&
          <div id="tab-item-03" role="tabpanel">
            3
          </div>
        }
      </div>
    </TabSC>
  )
};

const TabSC:FC = styled.div`
`

export default Tab
