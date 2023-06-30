import React, {useState} from 'react';
import './App.css';

interface intList{
  name:string;
}

function App() {

  const [newName, setNewName] = useState('');
  const [newList, setNewList] = useState<intList[]>([]);


  const handleName = (name: string) =>{
      const list: intList[] = [...newList, {name}];
      setNewList(list)
      console.log(list)
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
        {
          newList.map((l:intList, i: number)=>{
              return <h1 key={i}>{l.name}</h1>
          })
      }
    </div>
  );
}

export default App;
