import React, { Component } from 'react';
import TrainListComponent from './trainListComponent';

class TrainApp extends Component {
    render() {
        return (
              <><h1>Train Application</h1>
              <TrainListComponent/>
              </>
        )
    }
}

export default TrainApp