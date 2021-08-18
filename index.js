function toggleText() {
    var text = document.getElementById("question");
    text.style.display = "block";
    setTimeout(function(){
        var text2 = document.getElementById("pollution-text");
        text2.style.display = "block";
    }, 1500);
}