import { useEffect, useState } from 'react';
import './App.css';
// import Clock from 'react-digital-clock'

const App = () => {

  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `Count is ${count} Time`;
  }, [count])

  return(
    <>      
      <button onClick={() => {
        setcount(count + 1);
      }}>
        Count is : {count}
      </button>
    </>
  )
}

export default App;
