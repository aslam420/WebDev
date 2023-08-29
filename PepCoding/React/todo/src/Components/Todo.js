import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(){
    super();
    this.state={
      tasks:[
        {id:1, task:"Revise JS"}, 
        {id:2, task:"ReviseDSA"}
      ],
      curTask:""
    }
  }

  handleChange = (e)=> {
    console.log(e.target.value);
    this.setState({
      curTask: e.target.value
    })
  }

  handleSubmit = ()=> {
    this.setState({
      tasks:[...this.state.tasks, {task:this.state.curTask, id:this.state.tasks.length+1}]
  }) 
  }

  render() {
    console.log("render method is calling");
    return (  //jsx starts from here
      //<div>Todo</div>
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>
        { //use when need to write JS in JSX
          this.state.tasks.map((taskObj) => {
            return(
              <li key={taskObj.id}>
                <p>{ taskObj.task}</p>
                <button>Delete</button>
            </li>
            );
          })
        }
      </div>
    )
  }
}

