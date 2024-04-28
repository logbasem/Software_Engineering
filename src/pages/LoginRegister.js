/* Issues 8 and 9: Login and Register pages */

import '../css-html/App.css';
import "../css-html/index.css";
import React, {useState} from 'react';
import { useForm} from 'react-hook-form';

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => alert(JSON.stringify(data)); //Puts data into JSON form and then shows alert box containing data
    // console.log(errors); // Logs any errors to browser console
    const [successMessage, setSuccessMessage] = useState(false); 
    
    {/* api endpoint functionality */}
    {/* action="/users/register" // Send post request with the FormData
             encType={'application/json'} you can also switch to json object
             onSuccess={() => {
               alert("Your application is updated.")
             }}
             onError={() => {
              alert("Submission has failed.")
            }}
             control={control} > */}

    //method to create request to api
    const onSubmit = async (data) => {
      try {
        console.log('Form data:', data); //print the json data
        //send a response to api
        const response = await fetch('http://localhost:3001/users/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        if(response.ok) {
          setSuccessMessage(true);
          console.log('Registration successful');
        }

      return response;
      } catch (error) {
        console.error('Registration error', error);
        setSuccessMessage(false);
      }
    } 
  
    return (
      <><h1 class="registerh1">Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input class="register" type="text" placeholder="First name" {...register("first_name", { required: true, maxLength: 80 })} aria-invalid={errors.firstname ? "true" : "false"} />
          {errors.firstname?.type === "required" && (
            <p role="alert" class="lr-error">🚨 First name is required</p>
          )}
          {errors.firstname?.type === "maxLength" && (
            <p role="alert" class="lr-error">🚨 First name is too long</p>
          )}
        <input class="register" type="text" placeholder="Last name" {...register("last_name", { required: true, maxLength: 100 })} aria-invalid={errors.lastname ? "true" : "false"} />
          {errors.lastname?.type === "required" && (
            <p role="alert" class="lr-error">🚨 Last name is required</p>
          )}
          {errors.firstname?.type === "maxLength" && (
            <p role="alert" class="lr-error">🚨 Last name is too long</p>
          )}
        <input class="register" type="text" placeholder="Username" {...register("username", { required: true, maxLength: 20 })} aria-invalid={errors.username ? "true" : "false"} />
          {errors.username?.type === "required" && (
            <p role="alert" class="lr-error">🚨 Username is required</p>
          )}
          {errors.username?.type === "maxLength" && (
            <p role="alert" class="lr-error">🚨 Username is too long</p>
          )}
        <input class="register" type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} aria-invalid={errors.email ? "true" : "false"} />
          {errors.email?.type === "required" && (
            <p role="alert" class="lr-error">🚨 Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p role="alert" class="lr-error">🚨 Invalid email</p>
          )}
        <input class="register" type="password" placeholder="Password" {...register("enteredPassword", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,48}$/i})} aria-invalid={errors.enterdPassword ? "true" : "false"} />
          {errors.enteredPassword?.type === "required" && (
            <p role="alert" class="lr-error">🚨 Password is required</p>
          )}
          {errors.enteredPassword?.type === "pattern" && (
            <p role="alert" class="lr-error">🚨 Password doesn't meet requirements: between 8-48 characters, at least one letter and one number</p>
          )}

        {/* no type for users right now {...register("type")} */}
        <select  class="register" >
          <option value="producer">Producer</option>
          <option value="shopper">Shopper</option>
        </select>
  
        <input type="submit" class="register-login-button" />
      </form>

      <div>
        {successMessage && 
         <p className='success-message'>Registration Sucessful</p>
        }
      </div>
      </>
    );
  }
  
  
export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginMessage, setLoginMessage] = useState(false);
    // const onSubmit = data => alert(JSON.stringify(data)); //Puts data into JSON form and then shows alert box containing data
    // console.log(errors); // Logs any errors to browser console
    
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

    //send request to /users/login
    const onSubmit = async (data) => {
      try {
        console.log('Form data:', data); //print the json data
        //send a response to api
        const response = await fetch('http://localhost:3001/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
    
        if(response.ok) {
          console.log('Login successful');
          setLoginMessage(true);
        }
    
        return response;
      } catch (error) {
        console.error('Login error', error);
        setLoginMessage(false);
        }
      } 

    return (
      <><h1 class="registerh1">Login</h1><form onSubmit={handleSubmit(onSubmit)}>
        <input class="register" type="text" placeholder="Email" {...register("email", { required: true })} aria-invalid={errors.email ? "true" : "false"} /> 
          {errors.email?.type === "required" && (
            <p role="alert" class="lr-error">🚨 Email is required</p>
          )}

        <input class="register" type="password" placeholder="Password" {...register("userpassword", { required: true })} aria-invalid={errors.userpassword ? "true" : "false"} />
          {errors.userpassword?.type === "required" && (
            <p role="alert" class="lr-error">🚨 Password is required</p>
          )}
  
        <input type="submit" class="register-login-button" />
      </form>
      
      <div>
        {loginMessage &&
        <p className='success-message'>Login Successful</p>}
      </div>
      </>
    );
  }
  
    