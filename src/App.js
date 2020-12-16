import { useRef } from 'react'
import './App.css';

function App() {
  const elInputRef = useRef(null)

  const inputOnChange = (evt) => {
    let inputValueLength = String(evt.target.value.trim()).length
    if (inputValueLength >= 8) {
      elInputRef.current.classList.add('border--green')
      elInputRef.current.classList.remove('border--red')
    } else {
      elInputRef.current.classList.add('border--red')
      elInputRef.current.classList.remove('border--green')
    }
  }

  return (
    <>
      <input className='input' ref={elInputRef} onChange={inputOnChange} type='text' placeholder='Write min 8 characters' />
    </>
  );
}

export default App;
