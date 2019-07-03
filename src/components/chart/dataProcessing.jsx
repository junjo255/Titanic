import React from "react";

let genderData = []
let dataProcessing = (data) => {
    let female = 0;
    let male = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]["Sex"] === "female") {
            female = female + 1;
        } else {
            male = male + 1;
        }
    }

    genderData = [
        { name: "Female", y: female },
        { name: "Male", y: male},
    ];
    // console.log(genderData, "fuck")
    return 


}


export default dataProcessing;
export { genderData }