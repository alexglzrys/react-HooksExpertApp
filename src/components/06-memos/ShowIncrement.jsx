import React from 'react'

export const ShowIncrement = React.memo(({incrementar}) => {
    console.log('Hola me volví a ejecutar')
  return (
    <button className='btn btn-success' onClick={() => incrementar(5)}>Incrementar</button>
  )
})