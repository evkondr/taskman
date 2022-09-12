import axios from "axios";
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

class userService{
    static async getAll(){
        const result = instance.get("/");
        return result;
    }
}
export default userService