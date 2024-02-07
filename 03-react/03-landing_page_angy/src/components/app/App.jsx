import './App.css'
import { useState } from 'react'

function App() {

  let [ count, setCount ] = useState(0);

  // tenemos que crear handleSetCount para que funcione, pues si no metemos setCount dentro de una función que se llame con handle, sale que setCount ya está inicializada
  function handleSetCount() {
    setCount(count+1);

    let messageFiveTimes;

    count === 5 ? messageFiveTimes = alert(`You've already clicked ${count} times!`) : null;
  }

  return (
    <>
        <main>
            <h1>Este es el main</h1>
            <button onClick={handleSetCount}>Click me</button>
            <h2>You've clicked {count} times</h2>
        </main>
    </>
  )
}

export default App
