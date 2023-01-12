import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {createRoot} from 'react-dom/client'
import App from './views/App'
import Layout from './layouts'

const root = createRoot(document.querySelector("#root"))

//render your react application
root.render(<Layout/>)