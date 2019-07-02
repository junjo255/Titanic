// Import data from table and sort info and dataTotalnumber
import data from './data.js'

function dataProcessing() {
    let genderData = [];
 
    let female = 0 ; 
    let male = 0 ;
    for (let i = 0 ; i < data.length ; i++){
        if (data[i]["Sex"] === "female"){
            female = female + 1;
        } else {
            male = male + 1;
        }
    }

    genderData = [
        { name: "Female", y: female },
        { name: "Male", y: male },        
    ];
    
    console.log(genderData, "what is this whoop")
    return genderData;

}

export default dataProcessing;