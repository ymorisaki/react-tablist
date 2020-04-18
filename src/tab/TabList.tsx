import React, {FC} from 'react'

type prop = {
  title: string
  id: string
  select: boolean
}

const TabList:FC<prop> = ({title, id, select}) => {
  return (
    <li role="tablist">
      <a
        href={`#${id}`}
        role="tab"
        aria-controls={id}
        aria-selected={select}
      >
        {title}
      </a>
    </li>
  )
}

export default TabList
