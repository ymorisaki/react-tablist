import React, {FC} from 'react'

const TabList:FC = ({children}) => {
  return (
    <li role="tablist">
      {children}
    </li>
  )
}

export default TabList
