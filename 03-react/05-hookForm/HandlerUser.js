import axios from 'axios';

export const handleSubmit = (data) => {
  axios.post('http://localhost:3001/users', data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('Error al guardar los datos:', error);
    });
};