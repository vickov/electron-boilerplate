import React from "react";
import { useForm } from "react-hook-form";
import {insertUser}  from './requests'
import Styles from './Styles'
import "./formstyle.css";


function Invoice() {
  const { register, handleSubmit, errors } = useForm();
  //const onSubmit = data => console.log(data);
  const onSubmit = data => insertUser(data);
  console.log("submit"); // watch input value by passing the name of it

  return (
    <Styles>
<>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Amount</label>
      <input placeholder="0" name="amount" ref={register({ required: true })}/>
      <label>Last Name</label>
      <input name="lastName" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </>
    </Styles>
  );
}

export default Invoice;