import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from'./components/itemListContainer'

function App() {

  return (
    <div>
        <React.Fragment>
        <NavBar/>
        <ItemListContainer saludo= "Este es el itemListContainer" />
        </React.Fragment>
        </div>
  )
}


export default App




