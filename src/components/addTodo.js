import {Component} from 'react'
import AllTodos from './allTodos';
import * as React from 'react';
import Button from '@mui/material/Button';




class InputTodo extends Component{
    state={description:"", todos: []}
    

    onSubmitForm=async(event)=>{
        const {description, todos}=this.state
        event.preventDefault()
        try{
            const body={description}
            const response=await fetch("http://localhost:3011/todos",{
                    method:"POST",
                    headers:{"Content-type" :"application/json"},
                    body:JSON.stringify(body)
            });
            console.log(response)
            this.setState({ todos:[...todos, description]}) 
            // this.setState
            // console.log("*****",JSON.stringify(response))          
        }catch(e){
            console.error(e.message)
        }
    }

    onChangeState=(event)=>{
        this.setState({description:event.target.value}) 
    }

    render(){
        const {todos,description}=this.state
        // console.log("!@@!@@", todos)
        return(
            <>
            <h1 className='text-center mt-5'>Todo List</h1>
            <form onSubmit={this.onSubmitForm} className='d-flex mt-5'>
                <input onChange={this.onChangeState} type="text" className='form-control' value={description}/>
                <Button type='submit' variant="contained" className='ml-3'>Add todo</Button>
            </form>
           <AllTodos todoss = {todos}/>
            </>
        )
    }
}    

export default InputTodo