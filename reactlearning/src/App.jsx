import Aboutsection from './Aboutsection'
import './App.css'
import ContactSection from './ContactSection'
import Header from './Header'
import ProjectSection from './ProjectSection'


function App() {  
  const name="John Doe";
  const profession="Full Stack Developer";

  return (
    <>
    <div className='App'>
      <Header name={name} profession={profession}/>
      {/* About Section */}
      <Aboutsection  name={name} profession={profession} />
      <ProjectSection/>
      <ContactSection/>
      <footer className='footer'>
            <p>2025, All </p>
      </footer>
    </div>
    </>
  )
}

export default App
