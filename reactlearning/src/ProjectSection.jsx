import React from 'react'

const ProjectSection = () => {

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
  )
}

export default ProjectSection
