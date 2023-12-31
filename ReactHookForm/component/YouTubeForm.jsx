import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

let counter = 0

export const YouTubeForm = () => {

  counter ++
  const form = useForm()
  const { register, control, handleSubmit, formState} = form

  // este es el error que desplegamos en la pantalla
  const {errors} = formState

  // esta es la forma larga de hacerla,
  const { name, ref, onChange, onBlur} = register('username',
    {required: {
      value: true,
      message: 'Username is requiered'
  }})

  const onSubmit = (data) => {
    console.log('form submitted', data);
  }

  // The noValidate prop in a form element is used to disable browser's built-in form validation   

  return (
    <>
    <div>
      <h1>YouTube Form {counter/2}</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate> 
     
        <label htmlFor='username' >USERNAME</label>
        <input type="text" 
                id="username" 
                name={name} 
                ref={ref} 
                onChange={onChange}
                onBlur={onBlur}
                >
        </input>
        <p className='error'>{errors.username?.message}</p>

        <label htmlFor='email' >Email</label>
        <input type="email" 
                id="email" 
                // o se puede crear de esta forma que es resumida
                {...register('email',{
                  pattern: {
                    value: 
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email format'
                  }, 
                  // Pueden escribirse reglas de esta forma, o mas complejas, haciendo que validate reciba un objeto con varias validaciones
                  // validate: (fieldValue) => {
                  //   return fieldValue !== 'admin@example.com' || "Enter a different email address"
                  // }
                  validate: {
                    notAdmi: (fieldValue) => fieldValue === 'admin@example.com' ? "Enter a different email address" : undefined
                    ,
                    notBlackListed: (fieldValue) => fieldValue.endsWith('baddomain.com') ? "Domain not allowed" : undefined
                  
            
                  }
                })} >
        </input>
        <p className='error'> {errors.email?.message}</p>

        <label htmlFor='channel' >channel</label>
        <input type="text" 
                id="channel" 
                {...register('channel',{
                  required: 'Channel is required'
                })} >
        </input>
        <p className='error'>{errors.channel?.message}</p>

        <button>Submit</button>

      </form>
      <DevTool control={control}/>
    </div>

    {/* <div>
    <form>
      <label htmlFor='username' >USERNAME</label>
      <input type="text" id="username" name="username" ></input>

      <label htmlFor='email' >USERNAME</label>
      <input type="email" id="email" name="email" ></input>

      <label htmlFor='channel' >USERNAME</label>
      <input type="text" id="channel" name="channel" ></input>

      <button>Submit</button>

    </form>
    </div> */}
</>
    
  )
}