import React, { Component } from 'react'
import ProjectList from './ProjectList'

export default class Project extends Component {
    render() {
        return (
            <div>
                <h1>List of Project</h1>
                <ProjectList handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} projectlist={this.props.projectlist} />
            </div>
        )
    }
}
