// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  //const [error, setError] = React.useState('')
  const [username, setUsername] = React.useState('Jovan')

  // const handleChange = event => {
  //   const value = event.target.value
  //   setUsername(value)
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  // }

  const handleChange = event => {
    setUsername(event.target.value.toLowerCase())
  }

  const handleSubmit = event => {
    // console.log(event.target.elements.username.value)
    // const username = event.target.elements[0].value

    const username = inputRef.current.value

    onSubmitUsername(username)
    event.preventDefault()
  }

  const inputRef = React.useRef(null)

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          value={username}
          onChange={handleChange}
          ref={inputRef}
          id="username"
          type="text"
        />
        {/* {!!error && <div role="alert">{error}</div>} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
