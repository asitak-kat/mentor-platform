import React, { Component } from 'react';


class RequestForm extends Component {
    state = {
        subjects: 'CSS',
        question: 'Enter question here',
        requester: 'Alba',
        mentors: [],
        matches: [],
    }

    // Filter mentors on submitted subject
    checkForMatch = () => {
        let mentors = this.state.mentors;
        this.setState({
            matches: mentors.filter()
        })

    }

    // Triggers the matching function to return potential mentors
    handleSubmit = (event) => {
        alert('Done!')
        console.log(this.state)
        event.preventDefault();
        this.checkForMatch()
    }

    // Sets question to state
    handleQuestion = (event) => {
        this.setState({
            question: event.target.value,
        })
    }

    // Sets subject to state
    handleSubject = (event) => {
        console.log(event.target.value)
        this.setState({
            subjects: event.target.value
        })
    }

    render() {
        return (
            <div className="newRequest">
                <form id="RequestForm" onSubmit={this.handleSubmit}>
                    <label>
                        I need help with...
                        <select 
                            value={this.state.subjects} 
                            onChange={this.handleSubject}
                        >
                            <option value="CSS">CSS</option>
                            <option value="Javascript">Javascript</option>
                            <option value="Python">Python</option>
                            <option value="HTML">HTML</option>
                        </select>
                    </label>
                    <input 
                        type="text" 
                        value={this.state.question} 
                        onChange={this.handleQuestion}></input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default RequestForm;


