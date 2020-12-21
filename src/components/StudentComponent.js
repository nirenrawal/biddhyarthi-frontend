import React from 'react';
import StudentService from "../service/StudentService";

class StudentComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            students:[]
        }
    }

    componentDidMount() {
        StudentService.getStudents().then((response) => {
            this.setState({students: response.data})
        });
    }

    render () {
        return (
            <div>
                <h1>Add Students:</h1>
                <input/>
            </div>
        )
    }

}

export default StudentComponent