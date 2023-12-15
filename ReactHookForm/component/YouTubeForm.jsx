import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'

export const YouTubeForm = () => {
  const form = useForm()
  const { register, control, handleSubmit} = form

  // esta es la forma larga de hacerla,
  const { name, ref, onChange, onBlur} = register('username')

  const onSubmit = (data) => {
    console.log('form submitted', data);
  }

  return (
    <>
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate> 
      // The noValidate prop in a form element is used to disable browser's built-in form validation
        <label htmlFor='username' >USERNAME</label>
        <input type="text" 
                id="username" 
                name={name} 
                ref={ref} 
                onChange={onChange}
                onBlur={onBlur} >
        </input>

        <label htmlFor='email' >USERNAME</label>
        <input type="email" 
                id="email" 
                // o se puede crear de esta forma que es resumida
                {...register('email')} >
        </input>

        <label htmlFor='channel' >USERNAME</label>
        <input type="text" 
                id="channel" 
                {...register('channel')} >
        </input>

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