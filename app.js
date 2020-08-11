questions = [
    {
        Question : "What does HTML stand for?",
        options : [
            'Hyperlinks and Text Markup Language',
            'Hyper Text Markup Language',
            'Home Tool Markup Language'
        ],
        answer : 'Hyper Text Markup Language'

    },
    {
        Question : "What is the correct HTML tag for inserting a line break?",
        options : [
            '<br>',
            '<lb>',
            '<break>'
        ],
        answer : '<br>'

    },
    {
        Question : "What is the correct HTML for creating a hyperlink?",
        options : [
            '<a url="http://www.w3schools.com">W3Schools.com</a>',
            '<a name="http://www.w3schools.com">W3Schools.com</a>',
            '<a href="http://www.w3schools.com">W3Schools</a>'
        ],
        answer : '<a href="http://www.w3schools.com">W3Schools</a>'

    },
    {
        Question : "Which of these tags are all <table> tags?",
        options : [
            '<table><head><tfoot>',
            '<table><tr><td>',
            '<thead><body><tr>'
        ],
        answer : '<table><tr><td>'

    },
    {
        Question : "What is the correct HTML for inserting an image?",
        options : [
            '<img alt="MyImage">image.gif</img>',
            '<img href="image.gif" alt="MyImage">',
            '<img src="image.gif" alt="MyImage">'
        ],
        answer : '<img src="image.gif" alt="MyImage">'

    },
    {
        Question : "How can you make a numbered list?",
        options : [
            '<ol>',
            '<ul>',
            '<dl>'
        ],
        answer : '<ol>'

    },
    {
        Question : "What is the correct HTML for making a checkbox?",
        options : [
            '<checkbox>',
            '<input type="check">',
            '<input type="checkbox">'
        ],
        answer : '<input type="checkbox">'

    },
    {
        Question : "What does CSS stand for?",
        options : [
            'Creative Style Sheets',
            'Cascading Style Sheets',
            'Colorful Style Sheets'
        ],
        answer : 'Cascading Style Sheets'

    },
    {
        Question : "What is the correct HTML for referring to an external style sheet?",
        options : [
            '<stylesheet>mystyle.css</stylesheet>',
            '<style src="mystyle.css">',
            '<link rel="stylesheet" type="text/css" href="mystyle.css">'
        ],
        nswer : '<link rel="stylesheet" type="text/css" href="mystyle.css">'

    },
    {
        Question : "Which property is used to change the left margin of an element?",
        options : [
            'padding-left',
            'margin-left',
            'indent'
        ],
        answer : 'margin-left'

    },
]
var count =0;
var score = 0;
var input = prompt("Welcome To Quiz..Enter your name");
document.getElementById('username').innerHTML = input;
function nextQuestion(){
    count++;
    var backbtn = document.getElementById('backbtn');
    backbtn.style.display = 'inline';
    checkAnswer(count-1);
    displayQuestion(count);
    removeActive();
    if(count > 9 ){
        var nextbtn = document.getElementById('nxtbtn');
        nextbtn.innerHTML = "Finish"
    }
}
function previsiousQuestion(){
    count--;
    if(count < 1){
        var backbtn = document.getElementById('backbtn');
        backbtn.style.display = 'none';
    }
    displayQuestion(count);
    
}
function active(thisNode){
    removeActive();
    thisNode.classList.add('active');

}
function removeActive(){
    var active = document.getElementsByClassName('active');
    for (var i=0; i < active.length; i++){
        active[i].classList.remove('active');
    }
}
function checkAnswer(q){
    var select = document.getElementsByClassName('active');
    if(select[0].innerText === questions[q].answer){
        score += 10;
    }
    if(count>=10){
        alert("Yours Score is " + score);

    }
}
function displayQuestion(n){
    var num = n;
    var a = num + 1
    var heading = document.getElementById('heading');
    heading.innerText = 'Question ' +  a ;
    var question = document.getElementById('question');
    question.innerText = questions[num].Question;
    var op1 = document.getElementById('op1');
    op1.innerText = questions[num].options[0];
    var op2 = document.getElementById('op2');
    op2.innerText = questions[num].options[1];
    var op3 = document.getElementById('op3');
    op3.innerText = questions[num].options[2];

}