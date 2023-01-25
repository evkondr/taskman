import axios from "axios";
const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/todos"
})

class todosService{
    //get all todos
    static async getAllTodos(){
        const result = instance.get("/");
        return result;
    }
    //get todos by user id
    static async getTodosByUserId(id:string){
        const result = instance.get("/", {
            params: {
                userId: id
            }
        })
        return result
    }
    //delete todo
    static async deleteTodo(id:number){
        const result = instance.delete(`/${id}`)
        return result
    }
    //patch completed status
    static async patchCompleted(id:number, completed:boolean){
        const result = instance.patch(`/${id}`, {
            completed
        })
        return result
    }
}
export default todosService