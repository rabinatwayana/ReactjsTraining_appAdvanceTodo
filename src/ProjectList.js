import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default class ProjectList extends Component {
  handleDelete = (id) => {
    this.props.handleDelete(id)

    /* confirmAlert({
       title: 'Delete',
       message: 'Are you sure you want to delete',
       buttons: [
         {
           label: 'Yes',
           //onClick: () => alert('Click Yes')
           onClick: () =>  this.props.handleDelete(id)
         },
         {
           label: 'No',
           onClick: () => alert('Click No')
         }
       ]
     });
 
 */






  }
  handleEdit = (id) => {
    this.props.handleEdit(id)

  }
  render() {
    let projectList = this.props.projectlist.map((project) =>
      <li key={project.id}>{project.title}:{project.category}<button onClick={() => this.handleEdit(project.id)}>Edit</button>
        {  /*<button data-toggle="modal" data-target="#myModal" onClick={() => this.handleDelete(project.id)}>Delete</button></li>)*/}
        {  /*<button data-toggle="modal" data-target="#myModal" onClick={this.handleDelete}>Delete</button></li>)*/}
        <button data-toggle="modal" data-target="#myModal" >Delete</button></li>)
    return (
      <div>
        <ul>
          {projectList}
        </ul>




       <div className="modal fade" id="myModal" role="dialog"> 


          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Confirm Delete</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>

              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete</p>
              </div>
              <div className="modal-footer">
                <button type="button" onClick={this.handleDelete} className="btn btn-default" data-dismiss="modal">Yes</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
              </div>
            </div>
          </div>
        </div>





      </div>
    )
  }
}
