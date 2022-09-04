import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'

export const HooksApp = () => {
  return (
    <>
        <h1>Hooks App</h1>
        <CounterApp />
        <CounterWithCustomHook />
        <SimpleForm />
    </>
  )
}
