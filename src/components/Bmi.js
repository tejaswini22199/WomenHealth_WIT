import React from 'react'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import '../App.css'
const Bmi = () => {
    const {register,handleSubmit,errors}=useForm();
    const onSubmit=(data)=>
    {
        const weightM=0.3048*data.weight;
        console.log(data);
    }
    return (
        <form className="Bmi_form" onSubmit={handleSubmit(onSubmit)}>
            <div className="Bmi_child">
            <label>Enter Weight in Kg</label>
            <input type="number" name="weight" ref={register({required:'Please Enter all details'})}></input>
            </div> 
            <div className="Bmi_child">
            <label>Enter height in feet</label>
            <input type="number" name="height" ref={register({required:'Please Enter all details'})}></input>
            </div>
            {errors.password && <p>{errors.password.message}</p>}
         <div className="Bmi_child" >
                <input type="submit"></input>
            </div> 
        </form>
    )
}

export default Bmi
