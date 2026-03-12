import './App.css'
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';
import About from './Apps/Routing/About';
import Home from './Apps/Routing/Home';
import Contact from './Apps/Routing/Contact';
import Team from './Apps/Routing/Team';
import NotFound from './Apps/Routing/NotFound';

function App() {  
  return (
    <Router>
      <div className="min-h-screen">
      <nav className='bg-green-400 p-4'>
        <ul className='flex justify-between'>
          <li><Link className="inline-block text-white font-mono transition-transform duration-300 hover:scale-150 hover:text-mauve-950"  to={"/"}>Home</Link></li>
          <li><Link className='text-white hover:text-blue-600 font-serif transition duration-100 inline-block hover:scale-150 hover:text-fuchsia-600' to={"/about"}>About</Link></li>
          <li><Link className='text-white font-thin transition duration-100 inline-block hover:scale-150 hover:text-cyan-600' to={"/contact"}>Contact</Link></li>
        </ul>
      </nav>
      <div className="container mx-auto py-8">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}>
        <Route path='team' element={<Team/>} />        
        </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      </div>
      </div>
    </Router>
  )
}

export default App
