import { useState } from 'react'
import Button from './components/Button/button'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button btnType='primary' disabled>hello world</Button >
      <Button btnType='link' disabled>hello world</Button>
      <Button btnType='danger'>hello world</Button>
      <Button size='sm'>hello world</Button>
      <Button>hello world</Button>
      <code>
        const a = 'b';
      </code>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
