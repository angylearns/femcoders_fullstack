
/*
PRIMERA PARTE:
    Yo como usuario quiero generar una lista de participantes en un evento
    Yo como usuario quiero un campo donde escribir un nombre
    Yo como ususario quiero un botón que añada el el nombre a una lista
    Yo como usuario quiero ver una lista numerada con los participantes que voy añadiendo
*/

// Manejo de eventos: onchange
// Hooks: useState, useEffect (por razones un poco confusas, pues en una primera instancia no era necesario)
// Métodos: .map()

import {useState} from "react";

const UserList = () =>{
    
    // hemos usado useState para crear y actualizar las variables de usuario e inicializamos "user" en un string vacío (*)
    const [user, setUser] = useState('');
    // (*) ídem, pero esta vez inicializamos userList en un array vacío
    const [userList, setUserList] = useState([]);

    // esta función coge el valor de "user" usando setUser() - esta función se dispara en el onchange (cualquier cambio que la usuaria realice en el input)
    function handleNameChange(e){
        setUser([e.target.value])
    };

    // a través del evento onclick del botón, esta función guarda en un array (prevUserList) la variable user
    function handleAddUserToList() {
        setUserList(prevUserList => [...prevUserList, user]);
        /* setUserList(prevUserList => [...prevUserList, user], () => {
                //   console.log(userList);
        });
        ↑ Este MALIGNO console.log() lo pusimos por razones ajenas al proyecto porque queríamos comprobar que el array se estaba cargando y, además, para tener un punto de parada en los breakpoints. Sin embargo, el array no aparecía actualizado. ¿Por qué? Porque estaba metido dentro de la función y, por tanto, nunca iba a imprimir el array actualizado porque la función no había terminado de ejecutarse.
        */
        setUser('');
        }
    // Este console.log() sí funciona, sí imprime el array actualizado, porque está fuera de la función que actualiza el array.
    console.log(userList);

    // ↓ Acá creíamos que la solución al array que no se actualizaba era usar useEffect(). Este useEffect() sirve para manipular efectos secundarios; por ejemplo, para asegurarte de que lo que declares dentro de las llaves (console.log()) no se ejecute hasta que el estado de lo de entre corchetes [userList] no se haya actualizado.
    //   useEffect(()=>{
    //     console.log(userList)
    //   },[userList,])

    return(
        <>
        <section>
            <h1>Qué lista eres</h1>

            <label htmlFor="userName">Nombre: </label>
            <input type="text" name="userName" value={user} onChange={handleNameChange}/>

            <button onClick={handleAddUserToList}>Añadir usuario</button>
            <ul>
            {
                // map() itera sobre cada elemento y devuelve un nuevo array (por tanto, no modifica el original) con los elementos transformados según le hayamos pedido en la función.
                // Aquí está mapeando userList (como un forEach), a cada elemento lo llama user (o como nos dé la gana) y la palabra index es INSUSTITUIBLE, pues nos devuelve 
                userList.map((user, index)=>(
                    <li key={index}> {user} </li>
                ))
            }
            </ul>
        </section>
        </>
    )
}

export default UserList;