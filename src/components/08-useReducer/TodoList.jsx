import React from 'react'

export const TodoList = ({children}) => {
  return (
    <ul className='list-group'>
        {children}
    </ul>
  )
}
