import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header.tsx";
import {Providers} from "./redux/Provider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
        <Header/>
        <App/>
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
