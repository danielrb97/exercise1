import React, {useState} from 'react';
import { set, useForm } from "react-hook-form";
import './App.css';
import Lista from './Components/Lista';
import { intList } from './Components/Interfaces';
import Form from './Components/Form'



function App() {

  const [newName, setNewName] = useState('');
  var [newList, setNewList] = useState<intList[]>([]);
  const [id,setId] = useState<number>(0);
  var count:number = id;
  var list:intList[] = []

  const handleName = (name: string) =>{
      list = [...newList, {name,id}];
      count++;
      setId(count);
      setNewList(list);
      setNewName('');

  }

  const handleList =(listaActualizada:intList[])=>{
    setNewList(listaActualizada)
  }

  return (
    <div className="App">
        <form onSubmit={e => e.preventDefault()} >
          <h1>primer lista:</h1>
          <input type="text" onChange={e => setNewName(e.target.value)} value={newName}  />
          <button onClick={() => handleName(newName)}>send</button>
        </form>
        <div>
            <Lista newList={newList} retornarLista={handleList}  />
            <Form/>
            
        </div>
    </div>
  );
}

export default App;