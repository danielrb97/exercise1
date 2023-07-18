//dummy component

const Lista = ({newList, handleDelete, borrarTodo})=> (

    //fragments are used when we want to wrap something and that doesnt need a style
    <>
        <ul>
            {
                newList.map((list,index)=>(
                    <li key={list.index}>{list.name}<button onClick={() => handleDelete(index)}>x</button></li>
                ))
            }
        </ul>
        <button onClick={borrarTodo}>Borrar Todo</button>
    </>   
)

export default Lista;
