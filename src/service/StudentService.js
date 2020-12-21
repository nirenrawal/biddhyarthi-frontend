import axios from 'axios'

const STUDENT_REST_API = 'http://localhost:2345/api/students';

class StudentService {

    getStudents() {
        axios.get(STUDENT_REST_API);
    }
}

export default new StudentService()