import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from'./components/itemListContainer'
import ItemCount from './components/ItemCount'

function App() {

  return (
    <div>
        <React.Fragment>
        <NavBar/>
        <ItemListContainer/>
        <ItemCount />
        </React.Fragment>
        </div>
  )
}


export default App




