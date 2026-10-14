function checkResult(name, marks){
    if(typeof name !== "string"){
        console.log("Invalid name");
        return;
    }
    if(typeof marks !== "number") {
        console.log("Invalid marks");
        return;
    } else if (marks >= 90) {
        console.log(name + " A+");
    } else if (marks >= 75) {
        console.log(name +" A");
    } else if (marks >= 60) {
        console.log(name +" B");
    } else {
        console.log(name + " FaiL");
    }
}

checkResult("Raj", 82);