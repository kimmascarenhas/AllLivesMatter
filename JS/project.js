
if(localStorage.getItem('hasSeenPrompt') != 'true')
{
    var answer = prompt("Hi there! Are you visiting us from the EU region?")
    if(answer.toLowerCase()=='yes' ) { 
        alert  ("Sorry! To continue browsing , you must accept cookies in the banner below so we don't get into trouble!");
    }
    else {
        alert ( "Enjoy our site!");
        localStorage.hasSeenPrompt = true
    }
}
