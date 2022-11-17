import axios from "axios";
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})

class todosService{
    static async getAllTodos(){
        const result = instance.get("/");
        return result;
    }
    static async getTodosByUserId(id:string){
        const result = instance.get("/", {
            params: {
                userId: id
            }
        })
        return result
    }
    static async deleteTodo(id:number){
        const result = instance.delete(`/${id}`)
        return result
    }
}
export default todosService