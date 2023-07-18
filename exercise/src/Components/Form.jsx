import React, {useState} from 'react';
import { set, useForm } from "react-hook-form";
import {IntObj} from './Interfaces'



function Form() {

  const {register, handleSubmit, formState:{errors}} = useForm();

  const [newUser, setNewUser] = useState({});
  const [newName, setNewName] = useState('');
  const [newEmai, setNewEmail] = useState('');
  const [newPass, setNewPass] = useState('');

  const onSubmitHandler  = (data) =>{
    setNewUser(data);
    console.log(data);
    setNewName(data.name);
    setNewEmail(data.email);
    setNewPass(data.password);

   
  }

  return(
    <div>
      <h1>Segundo formulario: </h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div>
            <label>Username: </label>
            <input id='name' type="text" {...register("name", {
              required:true, 
              validate:{
                minLength: (v) => v.length >= 5,
                matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v)
              }})} /><br/>

              {errors.name?.type === "required" && (
                <small>Se requiere un nombre</small>
              )}

              {errors.name?.type === "minLength" && (
                <small>debe tener al menos 5 caracteres</small>
              )}

              {errors.name?.type === "matchPattern" && (
                <small>Debe contener solo letras y espacios</small>
              )}
          </div>
          <div>
              <label>email: </label>
              <input id='email' type="text" {...register("email", {
                required:true || 'se requiere email',
                validate:{
                  maxLength:(v) => v.length <=50 || 'pa que tan largo?',
                  minLength: (v) => v.length >=5 || 'como tan poquito?',
                  matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'email invalido'
                }})} /><br/>
                {errors.email?.message &&(
                  <small>{errors.email.message}</small>
                )}
          </div>
          <div>
            <label>password: </label>
            <input id='password' type="password" {...register("password", {
              required:true || 'se requiere contrase;a',
               validate:{
                maxLength:(v) => v.length <=50 || 'pa que tan largo?',
                minLength: (v) => v.length >=10 || 'como tan poquito?',
                matchPattern: (v) => /^[A-Za-z]+$/i.test(v) || 'contrase;a invalida'
              }})} /><br/>
                {errors.password?.type === "required" && (
                  <small>Se requiere contrase;a</small>
                )}

                {errors.password?.message &&(
                  <small>{errors.password.message}</small>
                )}
          </div>
          
          <input type='submit' value='S E N D'  />
        </form>
        <h2>{newName}</h2>
        <h2>{newEmai}</h2>
        <h2>{newPass}</h2>
    </div>
  )
}

export default Form;
