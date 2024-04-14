
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
    else if (option2State == true){
        location.href = "abouttheauthor.html";
    }
    else{
        alert("Please select an option!");
    }
}

function changeBackgroundColor(color){
    var body = document.getElementById("bodyColumn");
    body.style.backgroundColor = color;
}

/*Random cat fact retrieval, once retrieved fills the #quoteFill element*/
$(document).ready(function(){
    $.ajax({
        url: "https://meowfacts.herokuapp.com/",
        type: "GET",
        success: function(result){
            console.log(result.data[0]);
            $("#quoteFill").text(result.data[0]);
        },
        error: function(error){
            console.log(`Error ${error}`);
        }
    });
});