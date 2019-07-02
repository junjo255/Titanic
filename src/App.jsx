import React, { Component } from 'react';
import Table from './components/table'
// import Piechart from './components/piechart'
import DataProcessing from './components/chart/dataProcessing'
import Axios from 'axios'
import './styles.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        Axios.get('/api/passengers/survival')
            .then(res => {
                var saveData = res.data;
                // console.log(data, "this is data")
                return saveData
            })
            .then(src => {

                // console.log(src, "this is from app")
                this.setState({ data: src})

            })


    }


    render() {
        console.log(this.state.data, "this is from the app")
        return (

            <div>
                <h1>Titanic</h1>
                <div className="box">
                    <Table />
                    <DataProcessing saveData={this.state.data} />
                </div>
            </div>
        );

    }
}

export default App;