import { useState } from 'react'


function App() {





  const [value, setvalue] = useState(0)
  return (
    <>
      <div>
        <h1>COUNTER APP</h1>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setvalue(value + 1)}>Increment</ button>

        <button className="btn" onClick={() => setvalue(value - 1)}>Decrement</  button>

        <button className="btn" onClick={() => setvalue(0)}>Reset</button>
      </div>



    </>

  )
}

export default App

