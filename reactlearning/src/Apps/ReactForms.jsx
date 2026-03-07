import { useForm } from 'react-hook-form'

const ReactForms = () => {

    const {register, handleSubmit}=useForm();

    const onSubmit=(data)=> console.log(data);

    return (
        <div>
            <h1>Forms in React</h1>
            <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit(onSubmit)}>
                <label>Name:
                    <input {...register('name')}/>
                </label>
                <label>Email:
                    <input {...register('Email')}/>
                </label>
                <button className='button' type='submit' style={{height:'30px',width:'80px'}}>Submit</button>
            </form>
        </div>
    )
}

export default ReactForms
