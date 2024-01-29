/*
TERCERA PARTE:
    Yo como usuario quiero generar una lista de participantes en un evento
    Yo como usuario quiero campos de formulario donde añadir los datos del participante
    Yo como usuario quiero un botón que añada los datos del formulario a una lista
    Yo como usuario quiero un campo de formulario para añadir el dato "Nombre del evento"
    Yo como usuario quiero un botón que guarde la lista de participantes con el nombre del evento 
    Yo como usuario quiero ver la lista de participantes numerada y con su título
*/

import React, { useState } from 'react';

function ParticipantList() {
  const [eventName, setEventName] = useState('');
  const [participantFirstName, setParticipantFirstName] = useState('');
  const [participantLastName, setParticipantLastName] = useState('');
  const [eventObject, setEventObject] = useState({});

  const handleAddParticipant = () => {
    const newParticipant = `${participantFirstName} ${participantLastName}`;
    setEventObject({
      ...eventObject,
      [eventName]: eventObject[eventName] ? [...eventObject[eventName], newParticipant] : [newParticipant]
    });
    setParticipantFirstName('');
    setParticipantLastName('');
  };

  const handleSaveParticipantList = () => {
    // Aquí podrías guardar el objeto con la lista de participantes en tu base de datos o realizar cualquier otra acción necesaria
    console.log('Lista de participantes guardada:', eventObject);
  };

  return (
    <section>
      <h2>Qué lista eres</h2>
      <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Nombre del evento"/>
      <br />
      <input type="text" value={participantFirstName} onChange={(e) => setParticipantFirstName(e.target.value)} placeholder="Nombre del participante"/>

      <input type="text" value={participantLastName} onChange={(e) => setParticipantLastName(e.target.value)} placeholder="Apellido del participante"/>

      <button onClick={handleAddParticipant}>Añadir participante</button>
      <br />
      <button onClick={handleSaveParticipantList}>Guardar lista de participantes</button>
     
     <h3>Lista de participantes en el evento "{eventName}"</h3>
      
      <ol>
        {eventObject[eventName] && eventObject[eventName].map((participant, index) => (
          <li key={index}>
            {participant}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ParticipantList;