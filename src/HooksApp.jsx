import React from 'react'
import { CounterApp } from './components/01-useState/CounterApp'
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook'
import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook'
import { SimpleForm } from './components/02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './components/03-ejercicios/MultipleCustomHooks'
import { FocusScreen } from './components/04-useRef/FocusScreen'

export const HooksApp = () => {
  return (
    <>
        <h1>Hooks App</h1>
        <CounterApp />
        <CounterWithCustomHook />
        <SimpleForm />
        <FormWithCustomHook />
        <MultipleCustomHooks />
        <FocusScreen />
    </>
  )
}
