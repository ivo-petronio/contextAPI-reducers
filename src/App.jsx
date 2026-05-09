import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx'
import Home from './views/Home.jsx';
import './App.scss'


function App() {

  return (
    <>
      <main>
        
        <Header appName="To-Do List with React" />

        <Home />

        <Footer />

      </main>
    </>
  )
}

export default App
