import { Message } from './Message';
import { useForm } from '../hooks/useForm';

export const SimpleForm = () => {

  const result = useForm({
    username: '',
    email: '',
    password: '',
  })

  const { 
    formState, 
    username, 
    email, 
    password, 
    onInputChange, 
    onFormReset,
  } = result;

  return (
    <>
      <h1>Formulario con hooks</h1>
      <hr />
      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />
      <input 
        type="email"
        className="form-control"
        placeholder="tunombre@google.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />
      <input 
        type="password"
        className="form-control"
        placeholder="your password"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      {
        (username === 'kekus' && <Message />)
      }
      
      <button onClick={ onFormReset } className='btn btn-primary mt-2'>Borrar</button>

    </>
  )
}
