import './App.css'


function App() {  

  const name="John Doe";
  const profession="Full Stack Developer";
  const Projects=[
    {
      title: "Project One",
      description:"A web application built using react",
      link:"#"
  },{
    title: "Project Two",
      description:"A web application built using react",
      link:"#"
  },{
    title: "Project Three",
      description:"A web application built using react",
      link:"#"
  }
  ]

  return (
    <>
    <div className='App'>
      <header className='header'>
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav className='links'>
        <a href="#about">About</a>
        <a href='#project'>Project</a>
        <a href='#contact'>Contact</a>
      </nav>
      </header>
      {/* About Section */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>Hello! I am {name}, a passionate {profession}</p>
      </section>
      <section id='project' className='project-section'>
        <h2>Project</h2>
        <div className='project-list'>
            {Projects.map((Project,index)=>(
              <div key={index} className='project-item'>
                <h3>{Project.title}</h3>
                <h3>{Project.description}</h3>
              </div>
            ))}
        </div>
      </section>
      <section id='contact' className='contact-section'>
          <h2>Contact Me</h2>
          <p>If you would like to get in touch, feel free to contact me <a href="mailto:garygodwin234@gmail.com">johndoe@example.com</a></p>
      </section>
      <footer className='footer'>
            <p>2025, All </p>
      </footer>
    </div>
    </>
  )
}

export default App
