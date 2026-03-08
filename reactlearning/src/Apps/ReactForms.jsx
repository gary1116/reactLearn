import { useForm } from 'react-hook-form'

const ReactForms = () => {

    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();

    // console.log(watch('name'));

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const validateName=(value)=>{
        if(value === 'admin'){
            return 'Only admin is not allowed';
        }
        return true;
    }

    return (
        <div>
            <h1>Forms in React</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                <label>Name:
                    <input {...register('name',
                         { required: true,
                            validate:{validateName,
                            isNotNumber:(value)=>isNaN(value)||'name should not be a number'
                    }})}
                          />
                </label>
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
                <label>Email:
                    <input {...register('email',
                         { required: 'email is required',
                         minLength:{value:10,message:'Email should be greater than 10'}
                         })} />
                </label>
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
                <button className='button' type='submit' style={{ height: '30px', width: '80px' }}>Submit</button>
            </form>
        </div>
    )
}

export default ReactForms
