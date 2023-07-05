import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import './App.css';

interface intList{
  name:string;
}

interface IntObj{
  name:string;
  email:string;
  edad: number;

}


function ComponenteHijo({newList}:{newList:intList[]}){
  return(
    <div>
        {
          newList.map((list:intList, id:number)=>{
            return <h2 key={id}>{newList[id].name}</h2>
          })
        }
    </div>
  )
}

function ComponenteHermano(){
  const {register, handleSubmit} = useForm<IntObj>();
  const [newUser, setNewUser] = useState({});
  const [newName, setNewName] = useState('');
  const [newEmai, setNewEmail] = useState('');
  const [newEdad, setNewEdad] = useState(Number);
//preguntar duda, se podria usar un async y un await? ya que me aparece mas abajo que no existe los parametros que quiero
  const onSubmitHandler  = (data:IntObj) =>{
    setNewUser(data);
    console.log(data);
    setNewName(data.name);
    setNewEmail(data.email);
    setNewEdad(data.edad);

   
  }

  return(
    <div>
      <h1>Segundo formulario: </h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <label>Nombre: </label>
          <input type="text" {...register("name")} /><br/>
          <label>email: </label>
          <input type="text" {...register("email")} /><br/>
          <label>edad: </label>
          <input type="text" {...register("edad")} /><br/>
          <input type='submit' value='S E N D'  />
        </form>
        <h2>{newName}</h2>
        <h2>{newEmai}</h2>
        <h2>{newEdad}</h2>
    </div>
  )
}


function App() {

  const [newName, setNewName] = useState('');
  const [newList, setNewList] = useState<intList[]>([]);


  const handleName = (name: string) =>{
      const list: intList[] = [...newList, {name}];
      setNewList(list);
      setNewName('');

  }


  return (
    <div className="App">
        <form onSubmit={e => e.preventDefault()} >
          <h1>primer lista:</h1>
          <input type="text" onChange={e => setNewName(e.target.value)} value={newName}  />
          <button onClick={() => handleName(newName)}>send</button>
        </form>
        <div>
            <ComponenteHijo newList={newList} />
            <ComponenteHermano/>
        </div>
    </div>
  );
}

export default App;