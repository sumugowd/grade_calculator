console.log("working");
function addSubject(){
    let subjectsDiv = document.getElementById("subjects");

    let div = document.createElement("div");
    div.className="subject-block";
    div.innerHTML=`
    <input type="text" placeholder="Subject Name" class="subName">
    
    <input type="number" placeholder="Marks Obtained" class="subMarks">
    
    <input type="number" placeholder="Max Marks" class="subMax" value="100">
    
    <input type="number" placeholder="Pass Marks" class="subPass" value="40">
    
    <button onclick="this.parentElement.remove()" class="removeBtn">❌</button>
    <br><br>
    `;
    subjectsDiv.appendChild(div);
}
function calculateGrade(){
    let name = document.getElementById("name").value;

    if(!name){
        alert("Enter student name");
        return;
    }

    let subjectNames = document.getElementsByClassName("subName");
    let marks = document.getElementsByClassName("subMarks");
    let maxMarks = document.getElementsByClassName("subMax");
    let passMarks = document.getElementsByClassName("subPass");

    if(subjectNames.length === 0){
        alert("Add at least one subject!");
        return;
    }

    let totalObtained = 0;
    let totalMaximum = 0;

    let failedSubjects = [];

    for(let i=0;i<subjectNames.length;i++){

        let sName = subjectNames[i].value;
        let sMarks = Number(marks[i].value);
        let sMax = Number(maxMarks[i].value);
        let sPass = Number(passMarks[i].value);

        if(!sName || isNaN(sMarks) || isNaN(sMax) || isNaN(sPass)){
            alert("Please fill all subject fields properly");
            return;
        }

        totalObtained += sMarks;
        totalMaximum += sMax;

        if(sMarks<sPass){
            failedSubjects.push(`${sName} - ${sMarks}/${sMax} (Pass Mark: ${sPass})`);
        }
    }

    let percentage = (totalObtained / totalMaximum)*100;

    let grade;
    if(failedSubjects.length>0){
        grade = "F (Failed)";
    }else{
        if(percentage>=90) grade = "A";
        else if(percentage>=75) grade="B";
        else if(percentage>=60) grade="C";
        else if(percentage>=40) grade="D";
        else grade="F";
    }

    let failedText =
    failedSubjects.length>0
    ? failedSubjects.join("<br>")
    : "No Failed Subjects";

    let resultBox = document.getElementById("resultBox");
    resultBox.style.display="block";

    resultBox.innerHTML= `
    <strong>Name:</strong> ${name}<br>
    <strong>Total Marks:</strong> ${totalObtained}/${totalMaximum}<br>
    <strong>Percentage:</strong> ${percentage.toFixed(2)}%<br>
    <strong>Grade:</strong> ${grade}<br><br>
    <strong>Failed Subjects:</strong><br>
    ${failedText}
    `;
}

function resetForm(){
    document.getElementById("name").value= "";
    document.getElementById("subjects").innerHTML= "";
    document.getElementById("resultBox").style.display= "none";
}