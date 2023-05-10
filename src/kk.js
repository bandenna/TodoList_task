import {Component} from 'react'
class Edit extends Component{
  constructor(props){
    super(props)
    this.state={
      description:props.todo.description
    }
  }
  updateDescription=async (event)=>{
    event.preventDefault()
    try{
      const {todo}=this.state
      const {todo_id,description}=todo
      const response=await fetch(`http://loclhost:3011/todos/${todo_id}`,{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(description)
      });
      console.log("num",todo_id)
      console.log("mmmm",response)
    }catch(e){
      console.error(e.message)
    }

  }

    render(){
      const {description}=this.state
      // console.log(this.state,
      //   'str')
      
        return(

            <>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Edit
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Todo edit</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" className='form-control' value={description} onChange={this.editTheTodo}/>
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-warning" data-dismiss="modal" onClick={this.updateDescription}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
   </>
        )
    }
}
export default Edit