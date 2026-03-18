function calculateResult() {
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++)
        {
            let x=parseFloat(prompt("Enter the marks of subject "+(i+1)));
            total+=x;
        }
        let avarage=total/n;
        let grade;
        if (avarage>90)
        {
            grade="A+";
        }
        else if (avarage>80)
        {
            grade="A";
        }
        else if (avarage>70)
        {
            grade="B";
        }
        else if (avarage>60)
        {
            grade="C";
        }
        else if (avarage>50)
        {
            grade="D";
        }
        else if (avarage>40)
        {
            grade="E";
        }
        else
        {
            grade="F";
        }
       
       let result;
         if (grade=="F")
            {
                result="Fail";
            }   
        else
            {
                result="Pass";
            }
        document.getElementById("result").innerHTML="Total Marks: "+total+"<br>Avarage Marks: "+avarage+"<br>Grade: "+grade+"<br>Result: "+result;
}      