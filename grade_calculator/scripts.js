function calculateGrade(){
    let name = document.getElementById("name").value;
    let m1=Number(document.getElementById("m1").value);
    let m2=Number(document.getElementById("m2").value);
    let m3=Number(document.getElementById("m3").value);

    if(!name || isNaN(m1) || isNaN(m2) || isNaN(m3) ){
        alert("Please fill all fields");
        return;
    }

    let total = m1 + m2 + m3;
    let percentage = total/3;

    let subjectFail = (m1<40 || m2<40 || m3<40);

    let grade;

    if(subjectFail){
        grade="F (failed in one or more subjects)";
    }else{
        if(percentage>=90) grade="A";
        else if(percentage>=75) grade="B";
        else if(percentage>=60) grade="C";
        else if(percentage>=40) grade="D";
        else grade="F";
    }

    let resultBox=document.getElementById("resultBox");
    resultBox.style.display="block";

    resultBox.innerHTML= `
    <strong>Name:</strong> ${name} <br>
    <strong>Total:</strong> ${total} <br>
    <strong>percentage:</strong> ${percentage.toFixed(2)}%<br>
    <strong>Grade:</strong>${grade}
    `;
}