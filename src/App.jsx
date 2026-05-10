import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import { TasksContext } from './components/Context.js'
import { useState, useReducer } from 'react'
import { TasksReducer } from './components/Reducer.js'
import Home from './views/Home.jsx';
import './App.scss'

const initialTasks = [
  { id: 0, title: 'Banho do Fry', description: 'Banhar com shampoo Huggies e Cetoconazol', isDone: false },
  { id: 1, title: 'Banho da Bulma', description: 'Banhar com shampoo miconazol e clorexidina', isDone: false },
  { id: 2, title: 'Banho da Leela', description: 'Banhar com shapoo Huggies', isDone: false }
];


function App() {

  const [tasks, dispatch] = useReducer( TasksReducer, initialTasks )

  return (
    <>
      <TasksContext.Provider value={ {tasks, dispatch} }>
        <main>
          
          <Header appName="To-Do List with React" />

          <Home />

          <Footer />

        </main>
      </TasksContext.Provider>
    </>
  )
}

export default App
