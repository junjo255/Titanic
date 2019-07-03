const template = {
    userConfig: {
      tooltip: {
        pointFormat: "<b>{point.y}</b>"
      },
      plotOptions: {
        pie: {
          showInLegend: true,
          innerSize: "60%",
          dataLabels: {
            enabled: false,
            distance: -14,
            color: "white",
            style: {
              fontweight: "bold",
              fontsize: 50
            }
          }
        }
      }
    },
    sortInfo: "Gender",
    msg: "Click on a column to see the data"
  };
  
  export default template;
  