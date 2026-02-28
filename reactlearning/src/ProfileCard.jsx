import React from 'react'
import './App.css'

const ProfileCard = ({name, profession,isMember,Hobbies, onHobbyClick}) => {
  return (
    <div className='profileCard'>
      <h3>{name}</h3>
      <h4>{profession}</h4>
      <h5>{isMember ? 'Active Member':'Not Active Member'}</h5>
      <ul>
        {Hobbies.map((hobby,index)=>{
            return <li key={index} onClick={()=>onHobbyClick(hobby)}>{hobby} </li>
        })}
      </ul>
    </div>
  )
}

export default ProfileCard
