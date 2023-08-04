import{ useEffect, useState } from "react";
import DeleteAll from "./DeleteAll";

//dummy component

function Lista({ newList, itemId, handleDelete, borrarTodo, handleCheck }) {
    
  const [id, setId] = useState(Number);

  useEffect(()=>{
       setId(itemId)
       console.log(id)
  },[newList])

  const getStyle= () => {
    return{
        textDecoration: newList[id].completed  ? 'line-through': 'none',
        backgroundColor: '#CCF7E3'
    }
  }



  return (
    
    //fragments are used when we want to wrap something and that doesnt need a style
    
    <>
      <ul>
        {newList.map((list, index) => (
          <li key={list.index}>
            <input
              checked={newList[id].completed}
              key={index}
              type="checkbox"
              name="miCheck"
              onChange={()=>handleCheck(index)}
            />
            <div key={index} style={getStyle()}>{list.name}</div>
            
            <input type="text" name="listado" defaultValue={list.name} placeholder='Que hay que hacer?' style={getStyle()}/>
            <button onClick={() => handleDelete(index)}>x</button>
          </li>
        ))}
      </ul>
      <DeleteAll Atributte={{text:'Borrar todo'}} borrarTodo={borrarTodo}/>
    </>
  );
}
export default Lista;
