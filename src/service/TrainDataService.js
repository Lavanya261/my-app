import axios from 'axios'

const TRAIN_API_URL = 'http://localhost:8080'

class TrainDataService {

    retrieveAllCourses() {
        return axios.get(`${TRAIN_API_URL}/trainDetails`);
    }
}
const trainDataService =  new TrainDataService();
export default trainDataService;