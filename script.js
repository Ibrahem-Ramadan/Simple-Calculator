

var keyStrokHistory = "" ;

var setScreen = function(screen,value){
    document.getElementById(screen).innerText = value;
}

var setValue = function(btn){

    var currentVal =  document.querySelector('[data-current-operand]').innerText;

    if(currentVal == "0")
        document.querySelector('[data-current-operand]').innerText = "";

    
    if (currentVal != "0" && keyStrokHistory[keyStrokHistory.length-1] == "=")
    {
        setScreen("current-operand","");
        setScreen("previous-operand","");

    }
    if (currentVal.length < 14 )
    {
        document.querySelector('[data-current-operand]').innerText += btn.innerText ;
        keyStrokHistory+=btn.innerText
    }

}

var setOperator = function(operator){
    var current = document.querySelector('[data-current-operand]');
    setScreen("previous-operand","");
    document.querySelector('[data-previous-operand]').innerText += current.innerText + operator;
    setScreen("current-operand","");
    keyStrokHistory+=operator;

}

var displayResult = function(){
    var result , current = document.querySelector('[data-current-operand]') ;
    var prev = document.querySelector('[data-previous-operand]');

   
    try{
        result = eval(prev.innerText + current.innerText);

        if(result.toString().length > 14)
            result = result.toString().substring(0,14)

        document.querySelector('[data-previous-operand]').innerText += current.innerText;
        document.querySelector('[data-current-operand]').innerText = result;
        keyStrokHistory+="="
    }
    catch(error){
        alert("Improper Calculation");
    }
    

}

var backSpace = function(){
    var current = document.querySelector('[data-current-operand]').innerText;
    document.querySelector('[data-current-operand]').innerText = current.substring(0,current.length-1);
    if(document.querySelector('[data-current-operand]').innerText == "")
        document.querySelector('[data-current-operand]').innerText = "0"
    keyStrokHistory+="b"
    
}





