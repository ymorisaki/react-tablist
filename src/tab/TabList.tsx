import React, {FC} from 'react'

const TabList:FC = ({children}) => {
  return (
    <li role="presentation">
      {children}
    </li>
  )
}

export default TabList
