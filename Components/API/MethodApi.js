import './App.css';
import React, {useState, useEffect} from 'react';

function MethodApi() {

  const [a, b] = useState('posts')
  const [c, d] = useState([])

  useEffect(() => {
      // fetch(`https://jsonplaceholder.typicode.com/${a}`)
      // fetch(`https://www.googleapis.com/drive/v3/files/1AQuQvEklIsTJEMM8NjzDoqV2JR0QUQuc`)
      fetch(`https://drive.google.com/file/d/1AQuQvEklIsTJEMM8NjzDoqV2JR0QUQuc/view?usp=drivesdk`)
      .then(response => response.json())
      .then(newarr => console.log(newarr))
  },[a])

  return (
    <>
    <div className="cals">
        <button onClick={() => b('posts')}>Posts</button>
        <button onClick={() => b('users')}>Users</button>
        <button onClick={() => b('comments')}>Comments</button>
        
  </div> 
  <h1>{a}</h1>   
  {/* {
    c.map(c => {
      return <pre>{JSON.stringify(c)}</pre>
    })
  } */}
  </>
  );
}

export default MethodApi;

