import {Component} from "react"
import Edit from "./editTodo"
class AllTodos extends Component{
    constructor(props){
        super(props)
        this.state=props
    }

    componentDidMount(){
        this.getTodos()
        }

    componentWillReceiveProps(){
        this.getTodos()              // know that //
    }

    deleteTodo=async (id)=>{
        const {todos}=this.state
        const deleteT=await fetch(`http://localhost:3011/todos/${id}`,{
            method:"DELETE",
            headers:{"Content-type" :"application/json"}
        })
        console.log(deleteT)
        const filteredTodos=todos.filter(todo=>todo.todo_id!==id)
        this.setState({
            todos: filteredTodos
          })
    }

    getTodos=async()=>{
        //console.log("reached....")
            try{
                const response=await fetch("http://localhost:3011/todos")
                const jsonData=await response.json()
                this.setState({todos:jsonData})

            }catch(e){ 
                console.error(e.message)
            }
        
    }
    render(){
        const {todos}=this.state
        // state.todos = [...this.state.todos, this.props.todoss]
        // console.log("Came here", todoss)
        // console.log("Prpos", this.props.todoss)
    
        return( 

            <div>
                <table className="table">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      {todos?.map(todo => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><Edit todo={todo} getTodos={this.getTodos}/>
            </td>
            <td><button onClick={()=>{this.deleteTodo(todo.todo_id)}} className="btn btn-danger">Delete Todo</button></td>
           
        </tr>
      ))}
    </thead>
    <tbody>
      
    </tbody>
    </table>
            </div>
        )
    }
}
export default AllTodos