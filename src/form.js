import React from "react";
import { useForm } from "react-hook-form";
import {insertUser}  from './requests'

function Form() {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);
  const onSubmit = data => insertUser(data);
  console.log("submit"); // watch input value by passing the name of it

  return (
<>
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="example" defaultValue="test" ref={register} />
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </>
  );
}

export default Form;