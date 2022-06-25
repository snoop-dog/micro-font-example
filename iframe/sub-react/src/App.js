/*
 * @Description  : write something
 * @Autor        : snoop
 * @Date         : 2022-06-10 18:35:33
 * @LastEditors  : snoop
 * @LastEditTime : 2022-06-25 14:46:07
 */
import { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reactCount, setReactCount] = useState(0);
  const [vueCount, setVueCount] = useState(0);
  const reactCountRef = useRef(reactCount);
  window.addEventListener('message', e => {
    console.log(e.data.data)
  }, false)

  const handleClick = () => {
    setReactCount(reactCount + 1);
  }

  useEffect(() => {
    reactCountRef.current = reactCount;
    window.parent.postMessage({
      data: reactCountRef.current
    }, '*')
  }, [reactCount]);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => handleClick()}>点我</button>
        <span>react：{reactCount}</span>
        <span>vue：{vueCount}</span>
      </header>
    </div>
  );
}

export default App;
