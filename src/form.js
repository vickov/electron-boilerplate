import React from "react";
import { useForm } from "react-hook-form";
import {insertUser}  from './requests'

import "./formstyle.css";


function Form() {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);
  const onSubmit = data => insertUser(data);
  console.log("submit"); // watch input value by passing the name of it

  return (
<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input placeholder="First name" name="firstName" ref={register({ required: true })}/>
      <label>Last Name</label>
      <input name="lastName" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </>
  );
}

export default Form;