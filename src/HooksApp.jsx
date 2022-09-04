import React from 'react'
import { CounterApp } from './components/CounterApp'
import { CounterWithCustomHook } from './components/CounterWithCustomHook'

export const HooksApp = () => {
  return (
    <>
        <h1>Hooks App</h1>
        <CounterApp />
        <CounterWithCustomHook />
    </>
  )
}
