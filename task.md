# Septiembre 13, 2023

### Must

- Implementar contexto a toda mi aplicacion (_branch de context_).
- Editar el elemento de la lista hasta que el usuario haga submit (_recuerda usar los values del `handleSubmit` de react-hook-form>_)
- Agregar Key en map de `TodoList.tsx`
- Investigar como funcionan los children en los componentes y aplicarlo al componente `<DeleteAll />`
  - como paso los children
  - que puedo pasar como children
  - cuando puedo pasar children
  - como utilizo los children
- Hacer MAS reutilizable el componente `<Select />`
- Mis props pueden ser mas de 2 y no necesito meter todo en un objeto prop de `Attribute` porque es redundante

### Code Review

- Empezar a implementar mas Typescript en mi aplicacion
- Cambiar a arrow function mis componentes
- Renombrar file que contiene el contexto `StateCompo` a `ListContext`
- Mover hook de `useContextValues` a su propio file y meterlo en una carpeta especial para hooks.
- Remover files y comentarios que ya no necesito
- En `<TodoItem />` Sacar funcion onSubmit del return del componente.
- Verificar los nombramientos de props o variables para que hagan sentido semantico (modificar de ser necesario)
  - _Ex: si mi componente recibe 1 solo item, el prop deberia llamarse `item` y no `items`_
- En la funcion `editTask` recibir los valores de la forma, y modificar mi arreglo
- agregar un poco mas de react-hook-form
- Formatear el codigo
- Funcion `DeleteDoneTasks`

### Investigar

- [Typescript](https://www.typescriptlang.org/docs/)
- [React Previous State](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
- [Context](https://react.dev/reference/react/useContext)
- [React Router](https://reactrouter.com/en/main)
- [App Discovering the World - Renato](https://github.com/RenatoSanchez006/discovering_the_world)

# Agosto 9, 2023

### Must

- ~~Idear o buscar otro algoritmo diferente para mi funcion handle checkbox (aplicar lo aprendido)~~
  - ~~Investigar si en el handle checkbox puedo usar una funcion diferente a map - para evitar recorrer todo el arreglo sin ser necesario~~
  - ~~Usar mi funcion reutilizable~~
- Agregar Key en map de TodoList.tsx
- Investigar como funcionan los children en los componentes y aplicarlo al componente `<DeleteAll />`
  - como paso los children
  - que puedo pasar como children
  - cuando puedo pasar children
  - como utilizo los children
- ~~Hacer un componente `<Select />` reutilizable~~
- ~~Implementar context en una draft en una nueva branch _context_~~

### Code Review

- ~~Revisar estados de updateTask (evaluar, lo necesito?, como puedo implementarlo diferente)~~
- Cambiar a arrow function mis componentes
- ~~usar uuidv4() para id's~~
- ~~agregar un poco mas de react-hook-form~~
- ~~formatear el codigo~~

### Investigar

- ~~[Métodos y propiedades de un array](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)~~
- [React Previous State](https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state)
- [Context](https://react.dev/reference/react/useContext)

# Julio 24, 2023

### Must

- Idear o buscar otro algoritmo diferente para mi funcion handle checkbox

  - Investigar si en el handle checkbox puedo usar una funcion diferente a map - para evitar recorrer todo el arreglo sin ser necesario

- Despues de idear un algoritmo diferente para `handleCheckbox` y `editTask` evaluar si es posible hacer una funcion reutilizable.

### Codigo

- usar uuidv4() para id's
- ~~Agregar mas campos al forma~~
- ~~Agregar validaciones a la forma~~
- ~~Todo el codigo en ingles o todo en espa;ol~~
- ~~Condicion ternaria para los estilos, tambien funciona~~
- agregar un poco mas de react-hook-form
- ~~limpiar lo que no estoy usando~~

### Investigar

- ~~Investigar prop drilling y como solucionarlo~~
- Investigar sobre JSX
- ~~Porque usar === en lugar de ==~~
  - ~~Same for !== and !=~~
  - ~~Aplicarlo en mi codigo~~
- https://react.dev/reference/react/useState#updating-state-based-on-the-previous-state
- Investigar como funcionan los children en los componentes y aplicarlo al componente `<DeleteAll />`
- ~~Investigar porque no es buena practica usar el index como key cuando reendereo con ciclos (map())~~
- Contexto en react
