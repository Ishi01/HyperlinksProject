
function goToHistory(){
    location.href = "historypage.html";
}

function goToHome(){
    location.href = "homepage.html";
}

function goToAbout(){
    location.href = "abouttheauthor.html";
}

function dynamicLinkExample(){
    /*Dynamic Link Example*/
    /*This solution isn't optimal but its a fix to weird bug where pressing the button would swap the checked radio button for seemingly no reason */
    option1State = document.getElementById("linkOption1").checked;
    option2State = document.getElementById("linkOption2").checked;
    if (option1State == true){
        location.href = "homepage.html";
    }
    if (option2State == true){
        location.href = "abouttheauthor.html";
    }
}