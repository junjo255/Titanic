import React, { Component } from "react";
import "./App.css";
import template from "./chart/template";
import Dashboard from "./chart/Dashboard.jsx";
import dataProcessing, {
  genderData,
  ageData,
  survivalData
} from "./chart/dataProcessing";
import Axios from "axios";


class PieChart extends Component {
  constructor() {
    super()
    this.state = {
      template: template,
      data: [],
      sortInfo: []
    }
  }

  copyDataSeries(obj = {}) {
    this.setState({
      ...obj,
      charts: [
        { serie: genderData, title: "Gender" },
        { serie: ageData, title: "Age" },
        { serie: survivalData, title: "survivalData" },
      ]
    });
  };

  componentDidMount() {
    Axios.get('/api/passengers/survival')
      .then(res => {
        var saveData = res.data;
        return saveData
      })
      .then(src => {
        this.setState({ data: src })
        dataProcessing(src)
        this.copyDataSeries();
      })
  }

  render() {
    return (
      <>
        <div className="container bg-light">
          <div className="container">
            <div
              className={
                "text-center mb-0 pt-3" +
                (this.state.msg !== "Select the range" ? "text-danger" : "")
              }
            >
              <strong>{this.state.msg}</strong>
            </div>
            <Dashboard
              userConfig={this.state.userConfig}
              charts={this.state.charts}
            />

          </div>
        </div>
      </>
    );
  }
}

export default PieChart;
