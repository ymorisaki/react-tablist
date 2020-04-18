import React, {FC} from 'react'

type prop = {
  id: string
  state: string
}

const TabContent:FC<prop> = ({id, state, children}) => {
  console.log(state, id)
  return (
    <>
    {state === id &&
      <div id={id} role="tabpanel">
        {children}
      </div>
    }
    </>
  )
}

export default TabContent
