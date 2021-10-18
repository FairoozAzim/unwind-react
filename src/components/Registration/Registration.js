import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

  const Registration = () =>  {
  const {signInUsingEmail} = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = data => 
    {
        console.log(data);
        const { email,password } = data;
        signInUsingEmail(email,password);
    }
  
   
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} /> <br/>
      <input {...register("email")} /> <br/>
      <input {...register("password")} /> <br/>
      <input type="submit" />
    </form>
    </div>
  );
}


export default Registration;