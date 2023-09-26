import './App.css'

//pages
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Certificates from './pages/Certificates/Certificates.jsx'
import Projects from './pages/Projects/Projects'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Certificates/>
      <Footer/>
    </div>
  )

}

export default App