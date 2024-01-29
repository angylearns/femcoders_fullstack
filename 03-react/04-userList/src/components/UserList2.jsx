/*
SEGUNDA PARTE:
    Yo como usuario quiero generar una lista de participantes en un evento
    Yo como usuario quiero dos campos de formulario donde añadir los datos "Nombre" y "Apellido" 
    Yo como usuario quiero un botón que añada los datos del formulario a una lista
    Yo como usuario quiero ver la lista de participantes numerada
*/

import {useState} from "react";

const UserList2 = () => {
    const [user, setUser] = useState({
        name: '',
        lastName: ''
    });

    const [userList, setUserList] = useState([]);

    function handleNameChange(event) {
        setUser({...user, name: event.target.value});
    }

    function handleLastNameChange(event) {
        setUser({...user, lastName: event.target.value});
    }

    function handleAddUserToList() {
        setUser((prevUser) => {
            setUserList([...userList, user]);
            return {
                name: '',
                lastName: ''
            };
        });

        document.querySelector('input[name="userName"]').value = '';
        document.querySelector('input[name="lastName"]').value = '';
    }


    return (
        <>
        <section>
            <h1>Qué lista eres</h1>

            <label htmlFor="name">Nombre: </label>
            <input type="text" name="userName" onChange={handleNameChange}/>

            <label htmlFor="lastName">Apellido: </label>
            <input type="text" name="lastName" onChange={handleLastNameChange}/>

            <button onClick={handleAddUserToList}>Añadir usuario</button>
            <ol>
                {userList.map((user, index) => <li key={index}>{user.name} {user.lastName}</li>)}
            </ol>
        </section>
        </>
    )
}

export default UserList2