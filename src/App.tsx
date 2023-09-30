import { useState } from 'react'
import './App.css'
import { Button } from '@mui/material';

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button variant={'contained'} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
    </>
  )
}

export default App;
