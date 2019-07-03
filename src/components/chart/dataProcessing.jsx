import React from "react";

let sortedData = []
let dataProcessing = (data, sortInfo) => {

    console.log(sortInfo, "sortedInformation")
    if (sortInfo === "Gender") {
        let female = 0;
        let male = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Sex"] === "female") {
                female = female + 1;
            } else {
                male = male + 1;
            }
        }
    
        sortedData = [
            { name: "Female", y: female },
            { name: "Male", y: male},
        ];
    } else if (sortInfo === "Age"){
        let age1 = 0
            age2 = 0
            age3 = 0
            age4 = 0
            age5 = 0
        for (let i = 0; i < data.length; i++) {
            let ageData = data[i]["Age"]
            if (ageData > 0 && ageData <= 20){
                age1++;
            } else if (ageData > 20 && ageData <= 40){
                age2++;
            } else if (ageData > 40 && ageData <= 60){
                age3++;
            } else if (ageData > 60 && ageData <= 80){
                age4++;
            } else if (ageData > 80 && ageData <= 100){
                age5++;
            } 
        }
            sortedData = [
                { name: "Age (0-20)", y: age1 },
                { name: "Age (21-40)", y: age2 },
                { name: "Age (41-60)", y: age3 },
                { name: "Age (61-80)", y: age4 },
                { name: "Age (81-100)", y: age5 },

            ];
        
    } else if (sortInfo === "Survived"){
        let survived = 0;
            dead = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i]["Survived"] === 1){
                survived++
            } else {
                dead++
            }
        }
        sortedData = [
            { name: "Survived", y: survived },
            { name: "Dead", y: dead }
        ];
    } 

    return sortedData
}


export default dataProcessing;
export { sortedData }