import React from 'react'
import styleSheet from './index.module.scss'



function Input(props) {
  return (
    <div className={styleSheet.search}>
      <a href="">全部分类<i></i></a>
      <input type="text" />
      <button><i></i></button>
    </div>
  )
}

export default Input
