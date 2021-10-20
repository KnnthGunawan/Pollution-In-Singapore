function toggleText() {
    var text = document.getElementById("pollution-text").style.display="block";
    setTimeout(function(){
        document.getElementById("1").style.display="block";
    }, 1000);
}

function function1(){
    document.getElementById("button1").style.display="none";
    document.getElementById("text1").style.display="block";
    document.getElementById("2").style.display="block";
}

function function2(){
    document.getElementById("button2").style.display="none";
    document.getElementById("text2").style.display="block";
    document.getElementById("3").style.display="block";
}

function function3(){
    document.getElementById("button3").style.display="none";
    document.getElementById("text3").style.display="block";
    setTimeout(function(){
        document.getElementById("4").style.display="inline-block";
    }, 1000);

}