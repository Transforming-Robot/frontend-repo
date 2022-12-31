import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { useCounterStore } from './stores/App';
import styled from 'styled-components';

const Button = styled.button`
  background-color: tomato;
`;

function App() {
  const [count, setCount] = useCounterStore((state) => [
    state.count,
    state.increase,
  ]);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={setCount}>count is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
