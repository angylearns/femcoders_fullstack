import UserService from "./UserService";


export const UserHandler = {

    addUser(newUser){

        let user = {
            "userId": newUser.id,
            "userName": newUser.userName,
            "userPassword": newUser.userPassword
        }
        return UserService.submitUser(user);
        
    },
    loadUsers(){
        return UserService.getUsers();
    }
}

export default UserHandler;