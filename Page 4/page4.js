function toggleText() {
    var text = document.getElementById("pollution-text");
    text.style.display = "block";
    setTimeout(function(){
        var div1 = document.getElementById("1");
        div1.style.display = "block";
    }, 1000);
    setTimeout(function(){
        var div2 = document.getElementById("2");
        div2.style.display = "block";
    }, 3000);
    setTimeout(function(){
        var div3 = document.getElementById("3");
        div3.style.display = "block";
    }, 5000);
    setTimeout(function(){
        var div4 = document.getElementById("4");
        div4.style.display = "block";
    }, 8000);
}