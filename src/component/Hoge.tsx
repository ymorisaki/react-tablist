import React, {FC} from 'react'

const Hoge:FC<{title: string}> = ({title}) => (
  <>
    <p><b>{title}</b></p>
    <button type="button">フォーカスチェック</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam asperiores.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.<br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quod eveniet in vitae ipsa sunt voluptate, perferendis non iusto saepe neque quibusdam delectus nihil voluptatem earum vel illo animi asperiores.</p>
  </>
)

export default Hoge
