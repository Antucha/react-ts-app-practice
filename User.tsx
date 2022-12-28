import * as React from 'react';
import './style.css';

export default function User(props) {
  const userName = props.userName;
  return (
    <div>
      <h1>Hello StackBlitz User! {userName}</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
