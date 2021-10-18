function toggleText() {
    var text = document.getElementById("pollution-text");
    text.style.display = "block";
    setTimeout(function(){
        var text3 = document.getElementById("next_button");
        text3.style.display = "block";
    }, 3500);
}