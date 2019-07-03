import React, { Component } from 'react';
import Table from './components/table.jsx'
import PieChart from './components/piechart'
import './styles.css'

class App extends Component {
    render() {
        return (
            <div>
                <h1>Titanic</h1>
                <div className="box">
                    <Table /> 
                    <PieChart />
                </div>
            </div>
        );

    }
}

export default App;