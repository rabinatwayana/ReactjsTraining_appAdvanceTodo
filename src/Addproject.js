import React, { Component } from 'react'
import { v4 } from "uuid"

export default class Addproject extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showError: false,
            category: '',
            title: '',
            categories: ['Web Design', 'Web Development', 'Mobile Development']
        }
    }
    componentWillMount() {
        console.log(this.props.title,"proptitle")
        console.log("willmount")
        if (this.props.makeEdit) {
            this.setState({
                title: this.props.editTitle
            })
        }
    }
    handleOnChange = (e) => {
        this.setState({
            showError: false,
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.category === "") {
            this.setState({
                showError: true
            })
        } else {
            var project = {
                id: v4(),
                title: this.state.title,
                category: this.state.category,
            }
            this.props.handleAddProject(project)
            this.setState({
                category: 'Select',
                title: '',
            })
        }
    }
    /*  static defaultProps={
     categories:['Web Design','Web Development','Mobile Development']
   }*/

    render() {

        let categoriesOption = this.state.categories.map((category) => {
            return (
                <option key={category} name="category" value={category} >
                    {category}
                </option>
            );
        });
        return (

            <div>
                <h1>Add Project</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <br />
                    <input
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleOnChange}
                        type="text" />
                    {this.state.showError && <p style={{ color: "red" }}>Please fill up</p>}
                    <br />
                    <label >Category</label>
                    <br />
                    <select
                        name="category"
                        onChange={this.handleOnChange}
                        className="form-control">
                        <option selected disabled>Select</option>
                        {categoriesOption}
                    </select>
                    {this.state.showError && <p style={{ color: "red" }}>Please fill up</p>}

                    <br />
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
