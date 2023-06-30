import React, {useState} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState('');
  const [newName, setNewName] = useState('');


  const handleName = (name: string) =>{
    setName(name)
  }



  /*
  const handleName = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    console.log(name)
  }
  */

  return (
    <div className="App">
        <form onSubmit={e => e.preventDefault()} >
          <input type="text" onChange={e => setNewName(e.target.value)}  />
          <button onClick={() => handleName(newName)}>send</button>
        </form>

        <h1>{name}</h1>
    </div>
  );
}

export default App;
