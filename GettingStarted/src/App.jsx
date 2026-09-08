/*
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.
It is commonly used with React to define the structure and appearance of components.
JSX makes it easier to visualize the UI and manage the component's state and behavior in a more intuitive way.

*/

import './App.css'

function App() {

  const name="Gary Meledath";
  const profession="Software Engineer";
  const Projects=[
    {
      name:"Project 1",
      description:"This is the FIRST project. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link:"#"
    },
    {
      name:"Project 2",
      description:"This is the SECOND project. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link:"#"  
    },
    {
      name:"Project 3",
      description:"This is the THIRD project. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link:"#"
    },
    {
      name:"Project 4",
      description:"This is the FOURTH project. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link:"#"
    }
  ]

  return (
  <div className="FullPage">
    <header style={{backgroundColor:"lightblue", padding:"20px", textAlign:"center"}}>
      <h1 style={{color:"black"}}>{name}</h1>
      <h2 style={{color:"black"}}>{profession}</h2>
      <nav style={{display:"flex", justifyContent:"space-around"}}>
          <a style={{textDecoration:"none"}} href="#projects">Projects</a>
          <a style={{textDecoration:"none"}} href="#about">About</a>
          <a style={{textDecoration:"none"}} href="#contact">Contact</a>
      </nav>
    </header>

    <section id="about" style={{margin:"20px"}}>
    <h2 style={{alignItems:"flex-start"}}>About Me</h2>
    <p>Hey All, {name} here! I'm a passionate {profession} with experience in building web applications.</p>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div>
        {Projects.map((project,index)=>(
          <div key={index} style={{border:"1px solid black", margin:"10px", padding:"10px"}}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </section>
    <section id="contact" style={{margin:"20px"}}>
      <h2>Contact</h2>
      <p>You can reach me at: <a href="mailto:gary.meledath@example.com">gary.meledath@example.com</a></p>
    </section>
  </div>
  )

}

export default App
