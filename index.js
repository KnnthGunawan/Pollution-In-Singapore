function toggleText() {
    var text = document.getElementById("question");
    text.style.display = "block";
    setTimeout(function(){
        var text2 = document.getElementById("pollution-text");
        text2.style.display = "block";
    }, 1500);
    setTimeout(function(){
        var text3 = document.getElementById("next_button");
        text3.style.display = "block";
    }, 3000);
}

function toggleText2() {
    var text4 = document.getElementById("picture");
    text4.style.display = "block";
}