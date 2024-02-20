// ME QUEDÉ POR MINUTO 50:47

import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';

function Form() {

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
    /*
    Some useForm() options:
    - register('nombreDelInput', {objetoDeOpciones} ): Registra e identifica cada elemento/input del formulario.

    - handleSubmit: Maneja el envío el formulario; por ejemplo, para que no se cargue solo o para que se pueda comprobar antes de enviarlo.

    - formState (es un objeto): El valor actual de cómo está el formulario. Registra todos los valores del formulario y si alguno falla, crea un objeto Error y ese Error identifica qué input es el que ha fallado.

    - watch: Propiedad/función que al ejecutarse trae el estado actual del formulario. Eso nos sirve para validaciones y para condicionalmente mostrar, por ejemplo, otro input.

    - setValue: Propiedad/función que permite establecer el valor de un input.
    */

    // Este console.log() nos va a dar el objeto errors con los errores de cada input (en caso de haberlos), Y NOS DEVUELVE UN OBJETO CADA VEZ QUE TECLEAMOS, ES UNA LOCURAAA.
    console.log(errors);

    // Para un código más limpio, podemos crear una función onSubmit para manejar la función handleSubmit.
    const onSubmit = handleSubmit((data) => {
        axios.post('http://localhost:3001/users', data)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.error('Error al guardar los datos:', error);
          });
      });
      

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
                    required: {
                    value: true,
                    message: 'Password is required, please.',
                },
                })}
            />
            {
                errors.password && <span>{errors.password.message}</span>
            }

            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                    required: {
                        value: true,
                        message: 'Confirm password is required, please.',
                    },
                    validate: (value) => value === watch('password') || 'The passwords do not match.',
                })}    
            />
            {
                errors.confirmPassword && <span>{errors.confirmPassword.message}</span>
            }

            <label htmlFor="birtdate">Birthdate:</label>
            <input
                type="date"
                id="birtdate"
                {...register('birtdate', {
                    required: {
                        value: true,
                        message: 'Birthdate is required, please.',
                    },
                    validate: (value) => {
                        const birthdate = new Date(value);
                        const today = new Date();
                        const age = today.getFullYear() - birthdate.getFullYear();
                        
                        /*
                        Podemos usar el operador ternario...

                            return age >= 18 ? true : 'You must be at least 18 years old.' 
                        
                        ... o esto, que es más pro ↓:
                        */

                        return age >= 18 || 'You must be at least 18 years old.'
                        
                       
                    }
                })}
            />
            {
                errors.birtdate && <span>{errors.birtdate.message}</span>
            }

            <label htmlFor="country">Country:</label>
            <select id="country" {...register('country')}>
                <option value="none" selected disabled>Select a country</option>
                <option value="ve">Venezuela</option>
                <option value="es">Spain</option>
                <option value="de">Germany</option>
                <option value="pe">Peru</option>
            </select>
            {
            // Si queremos, por ejemplo, crear un campo tras verificar si la usuaria ha elegido España, hacemos esto ↓:
            
            watch('country') === 'es' && (
                <>
                    <select name="autComm" id="autComm" {...register('autComm', { required: true, message: 'Select an Autonomous Community' })}>
                        <option value="none" selected disabled>Select an Autonomous Community</option>
                        <option value="an">Andalucía</option>
                        <option value="ar">Aragón</option>
                        <option value="ib">Islas Baleares</option>
                        <option value="ic">Islas Canarias</option>
                    </select>
                    {
                        // ********** ESTO NO FUNCIONA. ECHARLE UN OJO ***********
                        errors.autComm === "none" && <span>{errors.autComm.message}</span>
                    }
                </>
            )}

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
                    required: {
                        value: true,
                        message: 'Read and accept the terms and conditions, please.',
                    }
                })}    
            />
            {
                errors.terms && <span>{errors.terms.message}</span>
            }

            <button type='submit'>Send</button>

            {/* Con esto vemos el valor del formulario cada vez que escribo algo en cada input gracias al watch() */}
            <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre>
        </form>
    )
}

export default Form;