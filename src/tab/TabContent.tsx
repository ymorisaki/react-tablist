import React, {FC} from 'react'

type prop = {
  id: string
}

const TabContent:FC<prop> = ({id, children}) => {
  return (
    <div id={id} role="tabpanel">
      {children}
    </div>
  )
}

export default TabContent
