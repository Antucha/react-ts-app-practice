import * as React from 'react';
import './style.css';

export default function App() {
  const styleBD = {
    background: '#15181E',
    color: 'green',
    borderRadius: '7px',
    padding: '15px',
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <code style={styleBD}>Hello world in spanishss</code>
    </div>
  );
}
