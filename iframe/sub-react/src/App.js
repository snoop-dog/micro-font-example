/*
 * @Description  : write something
 * @Autor        : snoop
 * @Date         : 2022-06-10 18:35:33
 * @LastEditors  : snoop
 * @LastEditTime : 2022-06-21 16:50:03
 */
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [reactCount, setReactCount] = useState(0);
  const [vueCount, setVueCount] = useState(0);

  const handleClick = () => {
    setReactCount(reactCount)
  }
  
  // useEffect(() => {
  //   setReactCount(reactCount + 1)
  // }, [reactCount])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => handleClick}>点我</button>
        <span>react：{reactCount}</span>
        <span>vue：{vueCount}</span>
      </header>
    </div>
  );
}

export default App;
