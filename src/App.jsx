import { useState } from 'react'
import Homepage from '@components/HomePage/HomePage';
import Info from '@components/Info/Info';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
      <Info />
    </>
  );
}

export default App
