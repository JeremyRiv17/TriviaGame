$(document).ready(function() {
//start game

//random number question select
var questions = {
    question1:"Who is this character?",
    question2:"Where is Dhalsim from?",
    question3:"Zangief is what type of character?",
    question4:"M. Bison is apart of what group?",
}
var answers1 = {
    answer1a:"Ken",
    answer1b:"Steben",
    answer1c:"Ryu",
    answer1d:"Kirby",
}
var answers2 ={
    answer2a:"China",
    answer2b:"Japan",
    answer2c:"India",
    answer2d:"Mongolia",
}
var answers3= {
    answer3a:"SnowBall",
    answer3b:"Assasin",
    answer3c:"Shoto",
    answer3d:"Grappler",
}
var answers4={
    answer4a:"Koppa Keep",
    answer4b:"Shadaloo",
    answer4c:"ShangHai Police",
    answer4d:"Peace Corp",
}
//visual Timer
var counter=10
var timer=$('.timer')
timer.html(counter)
function times(){
    counter--
    timer.html(counter)
    if(counter<1)
    counter=11

}
//Score
score=0
//states
var selected=""
var gamestate=0
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "Assets/Images/audio.mp3");
//populate main Content div
console.log(selected,gamestate)
$(".start").on("click", function(){
audioElement.play();
    gamestate=1
    selected=questions.question1
    setInterval(times ,1000)
    console.log(selected,gamestate)
    $(".maincontent").html(questions.question1);
    var ken = $("<img>")
    ken.attr("src", "Assets/Images/ken.jpg");
    $(".maincontent").append("<br>");
    $(".maincontent").append(ken);
    $("#answer1").text(answers1.answer1a);
    $("#answer2").text(answers1.answer1b);
    $("#answer3").text(answers1.answer1c);
    $("#answer4").text(answers1.answer1d);
    timeOut1=setTimeout(function(){ 
        gamestate=2
        selected=questions.question2
        $(".maincontent").html(questions.question2);
        $("#answer1").text(answers2.answer2a);
        $("#answer2").text(answers2.answer2b);
        $("#answer3").text(answers2.answer2c);
        $("#answer4").text(answers2.answer2d);
        console.log(selected,gamestate)
    }, 11000);
    timeOut2=setTimeout(function(){
        gamestate=3
        selected=questions.question3;
        $(".maincontent").html(questions.question3);
        $("#answer1").text(answers3.answer3a);
        $("#answer2").text(answers3.answer3b);
        $("#answer3").text(answers3.answer3c);
        $("#answer4").text(answers3.answer3d);
        console.log(gamestate,selected);
    }, 22000);

    timeOut3=setTimeout(function(){
        gamestate=4
        selected=questions.question4;
        $(".maincontent").html(questions.question4);
        $("#answer1").text(answers4.answer4a);
        $("#answer2").text(answers4.answer4b);
        $("#answer3").text(answers4.answer4c);
        $("#answer4").text(answers4.answer4d);
        console.log(selected, gamestate)
        
    }, 33000);


    timeOut4=setTimeout(function(){
        gamestate=0
        counter=""//not working
        
        alert("GAME OVER!!");
        $('.timer').empty() //not working
        clearInterval(times)//not working
        $(".maincontent").html("Your Score:"+score);
        $("#answer1").html("Question 1: Ken")
        $("#answer2").html("Question 2: India")
        $("#answer3").html("Question 3: Grappler")
        $("#answer4").html("Question 4: Shadaloo")
    },44000);
clearInterval(times)// not working

});

//check if answer is correct 
if(gamestate=1){
    $("#answer1").on("click", function(){
        gamestate=2
        score++
        selected=questions.question2;
        $(".maincontent").html(questions.question2);
        $("#answer1").text(answers2.answer2a);
        $("#answer2").text(answers2.answer2b);
        $("#answer3").text(answers2.answer2c);
        $("#answer4").text(answers2.answer2d);
        console.log(selected,gamestate);
    });
    $("#answer2").on("click", function(){
        gamestate=2
        selected=questions.question2;
        $(".maincontent").html(questions.question2);
        $("#answer1").text(answers2.answer2a);
        $("#answer2").text(answers2.answer2b);
        $("#answer3").text(answers2.answer2c);
        $("#answer4").text(answers2.answer2d);
        console.log(selected,gamestate);
    });
    $("#answer3").on("click", function(){
        gamestate=2
        selected=questions.question2;
        $(".maincontent").html(questions.question2);
        $("#answer1").text(answers2.answer2a);
        $("#answer2").text(answers2.answer2b);
        $("#answer3").text(answers2.answer2c);
        $("#answer4").text(answers2.answer2d);
        console.log(selected,gamestate);
    });
    $("#answer4").on("click", function(){
        gamestate=2
        selected=questions.question2;
        $(".maincontent").html(questions.question2);
        $("#answer1").text(answers2.answer2a);
        $("#answer2").text(answers2.answer2b);
        $("#answer3").text(answers2.answer2c);
        $("#answer4").text(answers2.answer2d);
        console.log(selected,gamestate);
    });
}
if(gamestate===2){
    $("#answer1").on("click", function(){
        gamestate=3
        score++
        selected=questions.question3;
        $(".maincontent").html(questions.question3);
        $("#answer1").text(answers3.answer3a);
        $("#answer2").text(answers3.answer3b);
        $("#answer3").text(answers3.answer3c);
        $("#answer4").text(answers3.answer3d);
        console.log(selected,gamestate);
    });
    $("#answer2").on("click", function(){
        gamestate=3
        selected=questions.question3;
        $(".maincontent").html(questions.question3);
        $("#answer1").text(answers3.answer3a);
        $("#answer2").text(answers3.answer3b);
        $("#answer3").text(answers3.answer3c);
        $("#answer4").text(answers3.answer3d);
        console.log(selected,gamestate);
    });
    $("#answer3").on("click", function(){
        gamestate=3
        score++
        selected=questions.question3;
        $(".maincontent").html(questions.question3);
        $("#answer1").text(answers3.answer3a);
        $("#answer2").text(answers3.answer3b);
        $("#answer3").text(answers3.answer3c);
        $("#answer4").text(answers3.answer3d);
        console.log(selected,gamestate);
    });
    $("#answer4").on("click", function(){
        gamestate=3
        selected=questions.question3;
        $(".maincontent").html(questions.question3);
        $("#answer1").text(answers3.answer3a);
        $("#answer2").text(answers3.answer3b);
        $("#answer3").text(answers3.answer3c);
        $("#answer4").text(answers3.answer3d);
        console.log(selected,gamestate);
    });
}
if(gamestate==="3"){
    $("#answer1").on("click", function(){
        gamestate=4
        score++
        selected=questions.question4;
        $(".maincontent").html(questions.question4);
        $("#answer1").text(answers4.answer4a);
        $("#answer2").text(answers4.answer4b);
        $("#answer3").text(answers4.answer4c);
        $("#answer4").text(answers4.answer4d);
        console.log(selected,gamestate);
    });
    $("#answer2").on("click", function(){
        gamestate=4
        selected=questions.question4;
        $(".maincontent").html(questions.question4);
        $("#answer1").text(answers4.answer4a);
        $("#answer2").text(answers4.answer4b);
        $("#answer3").text(answers4.answer4c);
        $("#answer4").text(answers4.answer4d);
        console.log(selected,gamestate);
    });
    $("#answer3").on("click", function(){
        gamestate=4
        selected=questions.question4;
        $(".maincontent").html(questions.question4);
        $("#answer1").text(answers4.answer4a);
        $("#answer2").text(answers4.answer4b);
        $("#answer3").text(answers4.answer4c);
        $("#answer4").text(answers4.answer4d);
        console.log(selected,gamestate);
    });
    $("#answer4").on("click", function(){
        gamestate=4
        score++
        selected=questions.question4;
        $(".maincontent").html(questions.question3);
        $("#answer1").text(answers4.answer4a);
        $("#answer2").text(answers4.answer4b);
        $("#answer3").text(answers4.answer4c);
        $("#answer4").text(answers4.answer4d);
        console.log(selected,gamestate);
    });
}

    $("#answer1").on("click", function(){
        selected=""
        gamestate=0
        alert("GAME OVER!!");
        $('.timer').empty()
        $(".maincontent").html("Your Score:"+score);
        $("#answer1").text("")
        $("#answer2").text("")
        $("#answer3").text("")
        $("#answer4").text("")
    });
    $("#answer2").on("click", function(){
        selected=""
        score++
        gamestate=0
        alert("GAME OVER!!");
        $('.timer').empty()
        $(".maincontent").html("Your Score:"+score);
        $("#answer1").text("")
        $("#answer2").text("")
        $("#answer3").text("")
        $("#answer4").text("")
    });
    $("#answer3").on("click", function(){
        selected=""
        gamestate=0
        alert("GAME OVER!!");
        $('.timer').empty()
        $(".maincontent").html("Your Score:"+score);
        $("#answer1").text("")
        $("#answer2").text("")
        $("#answer3").text("")
        $("#answer4").text("")
    });
    $("#answer4").on("click", function(){
        selected=""
        gamestate=0
        alert("GAME OVER!!");
        $('.timer').empty()
        $(".maincontent").html("Your Score:"+score);
        $("#answer1").text("")
        $("#answer2").text("")
        $("#answer3").text("")
        $("#answer4").text("")
    });

//keep score
//end game
});