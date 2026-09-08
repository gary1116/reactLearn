/*
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files.
It is commonly used with React to define the structure and appearance of components.
JSX makes it easier to visualize the UI and manage the component's state and behavior in a more intuitive way.

*/

import './App.css'

function App() {

  const isLoggedIn = true;

  // if (isLoggedIn) {
  //   return <h1>Welcome back!</h1>
  // }

  // return <h1>Please sign up.</h1>

  const element=<h1>{isLoggedIn ? 'Welcome back!' : 'Please sign up.'}</h1>
 
  return (
    <div className="">
    {element}
    </div>
  )

}

export default App
