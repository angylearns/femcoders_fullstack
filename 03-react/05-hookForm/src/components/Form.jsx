import React from 'react'
import { useForm } from 'react-hook-form'

function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    /*
    Some useForm() options:
    - register('nombreDelInput', {objetoDeOpciones} ): Registra e identifica cada elemento/input del formulario.

    - handleSubmit: Maneja el envío el formulario; por ejemplo, para que no se cargue solo o para que se pueda comprobar antes de enviarlo.

    - formState (es un objeto): El valor actual de cómo está el formulario. Registra todos los valores del formulario y si alguno falla, crea un objeto Error y ese Error identifica qué input es el que ha fallado.
    */

    // Este console.log() nos va a dar el objeto errors con los errores de cada input (en caso de haberlos).
    console.log(errors);

    // Para un código más limpio, podemos crear una función onSubmit para manejar la función handleSubmit.
    const onSubmit = handleSubmit((data) => console.log(data));

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name:</label>
            <input 
                type="text"
                id="name"
                {...register('name', {
                    required: {
                        value: true,
                        message: 'Name is required, please.',
                    },
                    minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters.',
                    },
                })}
            />
            
            {/* Esta es una manera pesada de hacerlo.Aquí comprobamos si la propiedad name del objeto errors existe, porque si lo ponemos sin el signo de interrogación, da error, pues cuando no hay error, ni la propiedad name del objeto errors ni el objeto errors existen.
                {
                errors.name?.type === 'minLength' && <span>Name must be at least 2 characters.</span>
                }
            
            En cambio, se implantan las propiedades de cada opción de validación del objeto errors (arriba, con value y message) y luego se hace lo siguiente ↓:
            */}
            {
                errors.name && <span>{errors.name.message}</span>
            }

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                {...register('email', {
                    required: {
                        value: true,
                        message: 'E-mail is required, please.',
                },
                    pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: 'Invalid e-mail.',
                    }
                })}
            />
            {
                errors.email && <span>{errors.email.message}</span>
            }

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                {...register('password', {
                    required: true
                })}
            />
            {
                errors.password && <span>Password is required, please.</span>
            }

            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                    required: true
                })}    
            />
            {
                errors.confirmPassword && <span>Confirm password, please.</span>
            }

            <label htmlFor="birtdate">Birthdate:</label>
            <input
                type="date"
                id="birtdate"
                {...register('birtdate', {
                    required: true
                })}
            />
            {
                errors.birtdate && <span>Birthdate is required, please.</span>
            }

            <label htmlFor="country">Country:</label>
            <select id="country" {...register('country')}>
                <option value="none" selected disabled>Select a country</option>
                <option value="ve">Venezuela</option>
                <option value="es">Spain</option>
                <option value="de">Germany</option>
                <option value="pe">Peru</option>
            </select>

            <label htmlFor="pic">Profile picture:</label>
            <input
                type="file"
                id="pic"
                {...register('pic')}
            />

            <label htmlFor="terms">Terms and conditions:</label>
            <input
                type="checkbox"
                id="terms"
                {...register('terms', {
                    required: true
                })}    
            />
            {
                errors.terms && <span>Read and accept the terms and conditions, please.</span>
            }

            <button type='submit'>Send</button>
        </form>
    )
}

export default Form;