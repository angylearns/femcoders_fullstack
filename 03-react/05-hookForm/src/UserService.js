import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const UserService = {
    async getUsers() {
        let response = await apiClient.get("/users");
        let allUsers = response.data;
        return allUsers;
    }
}

export default UserService;