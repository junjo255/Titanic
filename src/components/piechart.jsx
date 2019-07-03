import React, { Component } from "react";
import "./App.css";
import template from "./chart/template";
import Dashboard from "./chart/Dashboard.jsx";
// import { sortInfo } from "./table.tsx"
import dataProcessing, { sortedData } from "./chart/dataProcessing";
import  sortation from "./chart/sortation.jsx"
import Axios from "axios";



class PieChart extends Component {
  constructor() {
    super()
    this.state = {
      template: template,
      data: []
    }
  }

  copyDataSeries(obj = {}) {
    this.setState({
      ...obj,
      charts: [
        { serie: sortedData, title: "Gender" },
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
        // console.log(sortation(), "wow")
        dataProcessing(src)
        this.copyDataSeries();
      })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.sortInfo, "what the heck")
    if (prevState.sortInfo !== this.state.sortInfo){
      this.handleChangeSelect();
    }
  }

  // handleChangeSelect() {
  //   let msg = dataProcessing(this.state.sortInfo);
  //   this.copyDataSeries({ msg: msg });
  // }




  render() {
    
    console.log(sortation, "alsdkjfalksjdflkajsd")
    return (
      <>
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
      </>
    );
  }
}

export default PieChart;
