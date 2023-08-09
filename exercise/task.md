# Julio 24, 2023

### Must
- Idear o buscar otro algoritmo diferente para mi funcion handle checkbox
  - Investigar si en el handle checkbox puedo usar una funcion diferente a map - para evitar recorrer todo el arreglo sin ser necesario
  //Duda: intente con un find, filter, pero lo que ocupo es que me regrese un nuevo arreglo, para renderizarlo, que es en lo que me ayuda map al crear un nuevo arreglo

- Despues de idear un algoritmo diferente para `handleCheckbox` y `editTask` evaluar si es posible hacer una funcion reutilizable. //done

### Codigo
- usar uuidv4() para id's//done
- Agregar mas campos al forma //done
- Agregar validaciones a la forma //done
- Todo el codigo en ingles o todo en espa;ol //in progress
- Condicion ternaria para los estilos, tambien funciona // donde, no estoy seguro si lo hice bien
- agregar un poco mas de react-hook-form //done
- limpiar lo que no estoy usando//done

### Investigar
- Investigar prop drilling y como solucionarlo // done, pero no supe donde implementarlo, estuve investigando y veo que de un componente child a parent no se puede usar el contexto, que es donde tengo mas drilling, ya que paso la info de hijo a padre. 
- Investigar sobre JSX//done
- Porque usar === en lugar de ==//done
  - Same for !== and !=
  - Aplicarlo en mi codigo
- https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
- Investigar como funcionan los children en los componentes y aplicarlo al componente `<DeleteAll />`// duda: investigue como se usa los props children, pero no supe como usarlo con una funcion
- Investigar porque no es buena practica usar el index como key cuando reendereo con ciclos (map())// done, react lo usa para identificar los elementos, en este caso la lista, pero al yo estar modificando la lista, el orden de los elementos puede cambiar e impactar negativamente, por ejemplo si quito un elemento de en medio de la lista react puede asumir que el elemento que elimine aun existe
- Contexto en react//done