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

    const existingUserNames=['admin','user123','john']
    const checkIfUserName= async (value)=>{
        await new Promise(resolve=>setTimeout(resolve,1000));
        return existingUserNames.includes(value);

    }

    return (
        <div>
            <h1>Forms in React</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)}>
                <label>Name:
                    <input {...register('name',
                         { required: true,
                            validate:{validateName,
                            isNotNumber:(value)=>isNaN(value)||'name should not be a number',
                            checkUserName:async (value)=>{
                                const exist = await checkIfUserName(value);
                                return !exist || 'username already exists';
                            }
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
                
                <label >Password:
                    <input type="password" {...register('password',
                        { required: 'passwords are required bro',
                        minLength:{value:2,message:'password should be greater than 2'}}
                    )}/>
                </label>
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

                <label >Confirm Password:
                    <input type="password" {...register('ConfirmPassword',
                        { required: 'confirm the password!!',
                        minLength:{value:2,message:'password should be greater than 2'},
                     validate:value=>value===watch('password') || 'Passwords do not match'}
                    )}/>
                </label>
                {errors.ConfirmPassword && <p style={{ color: 'red' }}>{errors.ConfirmPassword.message}</p>}
                
                <button className='button' type='submit' style={{ height: '30px', width: '80px' }}>Submit</button>
            </form>
        </div>
    )
}

export default ReactForms
