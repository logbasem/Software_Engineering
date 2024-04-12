import './App.css';
import React from 'react';
import { useForm } from 'react-hook-form';

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data)); //Puts data into JSON form and then shows alert box containing data
    console.log(errors); // Logs any errors to browser console
    
    /* Insert after "<form" to add API endpoint functionality 
    
    action="/api/save" // Send post request with the FormData
        // encType={'application/json'} you can also switch to json object
        onSuccess={() => {
          alert("Your application is updated.")
        }}
        onError={() => {
          alert("Submission has failed.")
        }}
        control={control}*/
  
    return (
      <><h1 class="registerh1">Register</h1><form onSubmit={handleSubmit(onSubmit)}>
        <input class="register" type="text" placeholder="First name" {...register("firstname", { required: true, maxLength: 80 })} />
        <input class="register" type="text" placeholder="Last name" {...register("lastname", { required: true, maxLength: 100 })} />
        <input class="register" type="text" placeholder="Username" {...register("username", { required: true, maxLength: 20 })} />
        <input class="register" type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
        <input class="register" type="password" placeholder="Password" {...register("pw", { required: true, pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/i })} />
  
        <select  class="register" {...register("type")}>
          <option value="producer">Producer</option>
          <option value="shopper">Shopper</option>
        </select>
  
        <input type="submit" class="register-login-button" />
      </form></>
    );
  }
  
  
export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => alert(JSON.stringify(data)); //Puts data into JSON form and then shows alert box containing data
    console.log(errors); // Logs any errors to browser console
    
    /* Insert after "<form" to add API endpoint functionality 
    
    action="/api/save" // Send post request with the FormData
        // encType={'application/json'} you can also switch to json object
        onSuccess={() => {
          alert("Your application is updated.")
        }}
        onError={() => {
          alert("Submission has failed.")
        }}
        control={control}*/
  
    return (
      <><h1 class="registerh1">Login</h1><form onSubmit={handleSubmit(onSubmit)}>
        <input class="register" type="text" placeholder="Email" {...register("email", { required: true })} />
        <input class="register" type="password" placeholder="Password" {...register("pw", { required: true })} />
  
        <input type="submit" class="register-login-button" />
      </form></>
    );
  }
  
    