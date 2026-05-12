import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import { TasksProvider } from './components/TasksProvider.jsx'
import Home from './views/Home.jsx';
import './App.scss'

function App() {

  return (
    <>
        <main>
          <TasksProvider>
            <Header appName="To-Do List with React" />
            <Home />
            <Footer />
          </TasksProvider>
        </main>
    </>
  )
}

export default App
