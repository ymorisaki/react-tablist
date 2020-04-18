import React, {FC} from 'react'

type prop = {
  title: string
  id: string
  select: boolean
}

const TabList:FC<prop> = ({title, id, select}) => {
  return (
      <a
        href={`#${id}`}
        role="tab"
        aria-controls={id}
        aria-selected={select}
      >
        {title}
      </a>
  )
}

export default TabList
