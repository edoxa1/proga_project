var clickable_div = document.getElementById("clickable");
var actions = [showAnswers, showAnswers_1, show_win];
var counter = 1;
var action_counter = 0;
var max_value = 9;
var button_sound = $("#audio_button");


document.getElementById("back").addEventListener("click", show_bg);

function reload_document() {
    console.log("asdasd");
    setTimeout(function() {
        location.reload();
    }, 5000); 
}

function alt(){
    $("#front").style.zIndex="4";
    function alter(){
        $("#front").style.zIndex="2";
    }
    setTimeout(alter,500);
}

function show_bg() {
    button_sound.play();

    if(counter >= max_value - 1){
        actions[action_counter]();
        action_counter++;
    }
        
    if(counter >= max_value) {
        return;
    }
    $("#back").style.backgroundImage = "url('backgrounds/" + (counter) + ".png')";
    counter++;  
}


function showAnswers() {
    alt();
    document.body.style.opacity="1";
    $("#all").style.visibility = "visible";
    document.getElementById("back").removeEventListener("click", showAnswers);
    document.getElementById("back").removeEventListener("click", show_bg);
    $("#ans1").addEventListener("click", hit_him);
    $("#ans2").addEventListener("click", ask_him);
    $("#ans3").addEventListener("click", wait_for_him);
}

function hit_him() {
    alt();
    $("#all").style.visibility = "hidden";
    document.getElementById("back").removeEventListener("click", null);
    $("#ans1").removeEventListener("click", hit_him);
    $("#ans2").removeEventListener("click", ask_him);
    $("#ans3").removeEventListener("click", wait_for_him);
    // lose
    $("#back").style.backgroundImage = "url('backgrounds/lose.png')";
    reload_document();

}
function ask_him() {
    alt();
    $("#all").style.visibility = "hidden";
    document.getElementById("back").removeEventListener("click", null);
    document.getElementById("back").addEventListener("click", show_bg);
    counter = 13;
    max_value = 27;
    $("#ans1").removeEventListener("click", hit_him);
    $("#ans2").removeEventListener("click", ask_him);
    $("#ans3").removeEventListener("click", wait_for_him);
    $("#back").style.backgroundImage = "url('backgrounds/win1.png')";
}

function wait_for_him() {
    alt();
    $("#all").style.visibility = "hidden";
    document.getElementById("back").removeEventListener("click", null);
    $("#ans1").removeEventListener("click", hit_him);
    $("#ans2").removeEventListener("click", ask_him);
    $("#ans3").removeEventListener("click", wait_for_him);
    // lose
    $("#back").style.backgroundImage = "url('backgrounds/lose.png')";
    reload_document();
}

//

function showAnswers_1() {
    alt();
    document.body.style.opacity="1";
    $("#all").style.visibility = "visible";
    document.getElementById("back").removeEventListener("click", showAnswers_1);
    document.getElementById("back").removeEventListener("click", show_bg);
    $("#ans1").addEventListener("click", yuakaka_attack);
    $("#ans1").innerText = "Yuakaka attacks";
    $("#ans2").addEventListener("click", HavensDoor);
    $("#ans2").innerText = "Rohan's haven's door";
    $("#ans3").addEventListener("click", find_koichi);
    $("#ans3").innerText = "Find Koichi";
}
// yuakaka attacks
function yuakaka_attack() {
    alt();
    $("#all").style.visibility = "hidden";
    document.getElementById("back").removeEventListener("click", null);
    document.getElementById("back").addEventListener("click", show_bg);
    counter = 32;
    max_value = 43;
    $("#ans1").removeEventListener("click", null);
    $("#ans2").removeEventListener("click", null);
    $("#ans3").removeEventListener("click", null);
    $("#back").style.backgroundImage = "url('backgrounds/win2.png')";
}
// rohan's haven's door
function HavensDoor() {
    alt();
    $("#all").style.visibility = "hidden";
    document.getElementById("back").removeEventListener("click", null);
    $("#ans1").removeEventListener("click", null);
    $("#ans2").removeEventListener("click", null);
    $("#ans3").removeEventListener("click", null);
    // lose
    $("#back").style.backgroundImage = "url('backgrounds/lose2_1.png')";
    reload_document();
}
// find koichi
function find_koichi() {
    alt();
    $("#all").style.visibility = "hidden";
    document.getElementById("back").removeEventListener("click", null);
    $("#ans1").removeEventListener("click", null);
    $("#ans2").removeEventListener("click", null);
    $("#ans3").removeEventListener("click", null);
    // lose
    $("#back").style.backgroundImage = "url('backgrounds/lose2_2.png')";
    reload_document();
}
//

function show_win() {
    button_sound.src = "audio/end.mp3";
    button_sound.play();
}

//
function $(x){
    switch (x[0]){
        case "#":
            var k=x.substr(1);
            return document.getElementById(k);
        case ".":
            var k=x.substr(1);
            return document.getElementsByClassName(k);
        default:
           return document.getElementsByTagName(x);
    }
 
}
//for Phone.
function law(){
    $("#letter").style.left="-100vw";
    $("#letter").style.opacity="0";
}

window.onload=function(){
    document.body.style.opacity="1";
    $("#letter").addEventListener("click",law);
}



//the black blink
function alt(){
    $("#front").style.zIndex="4";
    function alter(){
        $("#front").style.zIndex="2";
    }
    setTimeout(alter,500);
}
