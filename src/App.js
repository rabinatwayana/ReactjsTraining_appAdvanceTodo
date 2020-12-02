import React, { Component } from 'react'
import Addproject from './Addproject'
import Project from './Project'
import { v4 } from "uuid"
import Todos from "./Todos"
import $ from "jquery"
import axios from "axios"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project: [],
      todos: [],
      makeEdit: false
    }
  }
  /*
getTodos() {
    fetch('http://jsonplaceholder.typicode.com/todos')
     // .then(response => console.log(response.json(),"fetch"))
     .then(response => response.json())
     // .then(data => console.log(data,"datafetch"));
      .then(data => this.setState({ todos: data}));
  }
*/
  
  getTodos() {
    axios({
      method: "get",
      url: "http://jsonplaceholder.typicode.com/todos",
      
    })
      .then((response) => {

        this.setState({
          todos: response.data
        })
        console.log(response, "resp")
        console.log(response.data, "res")
      })
      .catch((response) => {
        console.log("catcherror")
      })
  }
  /*
  getTodos(){
    $.ajax({
      url:"http://jsonplaceholder.typicode.com/todos",
      dataType:'json',
      cache:false,
      success:function(data){
       // console.log(data,"data")
        this.setState({
          todos:data
        },function(){
          console.log(this.state)
        });
      }.bind(this),
      error:function(xhr,status,err){
        console.log(err);
      }
        })
  }*/
  getProject() {
    this.setState({
      project: [
        {
          id: v4(),
          title: 'website of business',
          category: 'Web Development',
        },
        {
          id: v4(),
          title: 'Social Media',
          category: 'Facebook',
        },
        {
          id: v4(),
          title: 'React Native',
          category: 'Mobile App Development',
        },
      ],
    });
  }
  handleDelete = (id) => {
    // alert("handleDelete called")
    // console.log(id,"id")
    let projects = this.state.project;
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({
      project: projects
    })
  }

  handleEdit = (id) => {
    let projects = this.state.project;
    let index = projects.findIndex(x => x.id === id)
    this.setState({
      editTitle:projects[index].title,
      makeEdit: true,
      editIndex: index
    })
    console.log(index)
  }

  handleAddProject = (project) => {
    console.log(project.title)
    let projects = this.state.project;

    if (this.state.makeEdit) {
      projects[this.state.editIndex].title = (project.title)
      this.setState({
        project: projects,
        makeEdit: false
      })
    }
    else {
      projects.push(project)
      this.setState({
        project: projects
      })
    }
  }

  componentDidMount() {
    this.getProject();
    this.getTodos();
  }
  render() {
    // console.log(this.state.todos)
    return (
      <div className="container">
      {this.state.makeEdit && <Addproject makeEdit={this.state.makeEdit} editTitle={this.state.editTitle} handleAddProject={this.handleAddProject}/>}
       {this.state.makeEdit !== true &&  < Addproject handleAddProject={this.handleAddProject} />}
        <Project handleDelete={this.handleDelete} handleEdit={this.handleEdit} projectlist={this.state.project} />
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}
