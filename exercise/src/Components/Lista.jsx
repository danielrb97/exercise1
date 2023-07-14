import React, {useEffect, useState}from 'react';
import { intList } from './Interfaces';


function Lista({newList, retornarLista}) {
  const [lista, setLista] = useState(newList);
  
  useEffect(()=>{
    setLista(newList);
  },[newList])

  const handleDelete = (index)=>{
    setLista(lista.filter(a => a.id !== lista[index].id))
    retornarLista(lista);
  }
  
  const borrarTodo=()=>{
    setLista([]);
    console.log(lista)
    retornarLista(lista);
  }
 
  return (
    <div>
        <ul>
            {
                lista.map((list,index)=>(
                    <li key={list.id}>{list.name}<button onClick={() => handleDelete(index)}>x</button></li>
                ))
            }
        </ul>
        <button onClick={() => borrarTodo()}>Borrar Todo</button>
    </div>   
  );
}

export default Lista;
