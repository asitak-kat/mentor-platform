import React, { Component } from 'react';


class SubjectList extends Component {
    state = {
        subjects: '',
    }

    handleChange = (event) => {
        this.setState({ subjects: Array.from(event.target.selectedOptions, (item) => item.value) });
    }

    handleSubmit = (event) => {
        alert('Done!')
        console.log(this.state)
        event.preventDefault();
    }

    render() {
        return (
            <div className="subjectList">
                <form className="selectSubjects" onSubmit={this.handleSubmit}>
                    <label>
                        I can mentor people in...
                        <select 
                            multiple={true} 
                            value={this.state.subjects} 
                            onChange={this.handleChange}
                        >
                            <option value="CSS">CSS</option>
                            <option value="Javascript">Javascript</option>
                            <option value="Python">Python</option>
                            <option value="HTML">HTML</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SubjectList;