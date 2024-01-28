import React from 'react'
import ReactDOM from 'react-dom/client'
import { HookApp } from './HookApp'
import './index.css'
import { CounterApp } from './CounterApp';
import { CounterCustomHook } from './CounterCustomHook';
import { SimpleForm } from './useEffect/SimpleForm';
import { MultipleCustomHooks } from './examples/MultipleCustomHooks';
import { FocusScreen } from './useRef/FocusScreen';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FocusScreen />
    <hr />
    <MultipleCustomHooks />
    <hr />
    <HookApp />
    <hr />
    <CounterApp />
    <hr />
    <CounterCustomHook />
    <hr />
    <SimpleForm />
    <hr />
  </React.StrictMode>,
)
