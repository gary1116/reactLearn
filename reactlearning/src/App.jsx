import Aboutsection from './Aboutsection'
import './App.css'
import ContactSection from './ContactSection'
import Header from './Header'
import ProjectSection from './ProjectSection'
import ProfileCard from './ProfileCard'


function App() {  

  const handleHobbyClick = (hobby)=>{
        alert(`you clicked on : ${hobby}`);
  }


  return (
    <>
    <div className='App'>
      <ProfileCard name={"Gary"} 
      profession="developer" 
      isMember={true} 
      Hobbies={['Reading', 'writing']}
      onHobbyClick={handleHobbyClick}
      />

      <ProfileCard name={"Gaurav"} 
      profession="engineer" 
      isMember={false} 
      Hobbies={['cycling', 'swimming']}
      onHobbyClick={handleHobbyClick}

      />
    </div>
    </>
  )
}

export default App
