import React from "react";

let genderData = [],
    ageData = [],
    survivalData = []

let dataProcessing = (data) => {


    let female = 0,
        male = 0,
        age1 = 0,
        age2 = 0,
        age3 = 0,
        age4 = 0,
        age5 = 0,
        survived = 0,
        dead = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i]["Sex"] === "female") {
            female = female + 1;
        } else if (data[i]["Sex"] === "male") {
            male = male + 1;
        }

        if (data[i]["Age"] > 0 && data[i]["Age"] <= 20) {
            age1++;
        } else if (data[i]["Age"] > 20 && data[i]["Age"] <= 40) {
            age2++;
        } else if (data[i]["Age"] > 40 && data[i]["Age"] <= 60) {
            age3++;
        } else if (data[i]["Age"] > 60 && data[i]["Age"] <= 80) {
            age4++;
        } else if (data[i]["Age"] > 80 && data[i]["Age"] <= 100) {
            age5++;
        }

        if (data[i]["Survived"] === 1) {
            survived++
        } else if (data[i]["Survived"] === 0) {
            dead++
        }
    }

    genderData = [
        { name: "Female", y: female },
        { name: "Male", y: male },
    ];

    ageData = [
        { name: "Age (0-20)", y: age1 },
        { name: "Age (21-40)", y: age2 },
        { name: "Age (41-60)", y: age3 },
        { name: "Age (61-80)", y: age4 },
        { name: "Age (81-100)", y: age5 },
    ];

    survivalData = [
        { name: "Survived", y: survived },
        { name: "Dead", y: dead }
    ];

}


export default dataProcessing;
export { genderData, ageData, survivalData }