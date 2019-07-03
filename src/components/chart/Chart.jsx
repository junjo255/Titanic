import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class Chart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: {
                chart: {
                    type: "pie",
                    marginBottom: 100
                },
                title: {
                    text: this.props.titleName
                },
                subtitle: {
                    text:' ',
                    floating: true,
                    style: {
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "#000000"
                    },
                    y: 170
                },
                series: [
                    {
                        data: this.props.data
                    }
                ],
            }
        };

    }

    render() {
        return (
            <>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={this.state.chartData}
                />
            </>
        );
    }
}

export default Chart;
