import React, { Component } from "react";
import "./App.css";
import template from "./chart/template";
import Selection from "./chart/Selection";
import Dashboard from "./chart/Dashboard.jsx";
import dataProcessing, {
  genderData
} from "./chart/dataProcessing";
import saveData from "./table.tsx"



class PieChart extends Component {
  constructor() {
    super()
    this.state = {
      template,
      saveData: this.props.saveData
    }
  }

  copyDataSeries(obj = {}) {
    this.setState({
      ...obj,

      charts: [
        { serie: genderData, title: "Gender" }
      ]
    });
  };

  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
    this.copyDataSeries();
  }

  handleSubmit(e) {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.yearFrom !== this.state.yearFrom) {
      this.handleChangeSelect();
    }
    if (prevState.yearTo !== this.state.yearTo) {
      this.handleChangeSelect();
    }
  }
  handleChangeSelect() {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
  }

  handleChangeYear(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <>
        <div className="container bg-light">
        </div>
        <div className="container  mb-5 pb-3 bg-light">
          <strong>{this.state.msg}</strong>
        </div>
        <Selection
          yearFrom={this.state.yearFrom}
          yearTo={this.state.yearTo}
          onChangeYear={this.handleChangeYear}
          onSubmit={this.handleSubmit}
        />
        <Dashboard
          userConfig={this.state.userConfig}
          charts={this.state.charts}
        />
      
      </>
    );
  }
}

export default PieChart;
