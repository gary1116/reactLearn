import React, { useState } from 'react'

const Forms = () => {

    const [formData,setFormData]=useState({
        name:''

    })

    const [errors,setErrors]=useState({});

    const validate=()=>{
        const newErrors={};
        if(!formData.name.trim()){
            newErrors.name='Name is required'
        }
        return newErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors=validate();
        if(Object.keys(validationErrors).length>0){
            setErrors(validationErrors);
        }else{
            console.log('form data submitted:- ',formData);
        }
    }

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
        console.log(e.target.value);
        if(errors[name]){
            const newErrors={...errors};
            delete newErrors[name];
            setErrors(newErrors);
        }
    }

    return (
        <div>
            <h1>Forms in React</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="" >Name:
                    <input type='text' placeholder='John Doe' name='name' value={formData.name} onChange={handleChange}/>
                    {errors.name && <span>{errors.name}</span>}
                </label>
                <button className='button' type='submit' onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Forms
