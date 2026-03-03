import React, { createContext, useContext, useState } from 'react'

const themeContext = createContext('light');

const UseContextDemo = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
    <GlobalComponent/>
    <themeContext.Provider value={theme}>
      <div style={{ border: '5px solid black', padding: '10px', margin: '20px' }}>
        <h2>App (Parent)</h2>
        <button onClick={toggleTheme}>toggle button</button>
        <ComponentA />
      </div>
    </themeContext.Provider>
    </>

  )
}

const ComponentA = () => {
  return (
    <div style={{ border: '5px solid red', padding: '10px' }}>
      <h2>App (Child)</h2>
      <ComponentB />
    </div>
  )
}


const ComponentB = () => {
  return (
    <div style={{ border: '5px solid yellow', padding: '10px' }}>
      <h2>App (GrandChild)</h2>
      <ComponentC />
    </div>
  )
}

const ComponentC = () => {
  const theme = useContext(themeContext);
  return (
    <div style={{ border: '5px solid pink', padding: '10px' }}>
      <h2>App (GreatGrandChild)</h2>
      <p>the current theme is {theme} </p>
    </div>
  )
}

const GlobalComponent = () => {
  const theme = useContext(themeContext);
  return (
    <div style={{ border: '5px solid grey', padding: '10px' }}>
      <h2>Global Component (Outside Provider)</h2>
      <p>the current theme is {theme} </p>
    </div>
  )
}

export default UseContextDemo
