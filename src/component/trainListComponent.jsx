import { Component } from 'react';
import TrainDataService from '../service/TrainDataService';
class TrainListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trains: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        TrainDataService.retrieveAllCourses()
            .then(
                response => {
                    console.log(response);
                    this.setState({ trains: response.data})
                }
            )
    }
    render() {
        return (
            <div className="container">
                <h3>List Of All Trains</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Platform</th>
                                <th>time</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.trains.map(
                                    train =>
                                    <tr key={train.trainName}>
                                        <td>{train.trainName}</td>
                                        <td>{train.platFormNumber}</td>
                                        <td>{train.time}</td>
                                    </tr>
                                )
                            }  
                        </tbody>  
                    </table>
                </div>
            </div>
        )
    }
}
export default TrainListComponent