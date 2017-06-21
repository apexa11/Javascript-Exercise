var secret = prompt("whats your secret name?");
var count = 0;
while (count <5){
    if(secret == 'apexa'){
        alert("thats your name "+ secret)
        break;
    }
    else{
        var secret = prompt("try again !!")
    }
    count +=1;
}
document.write("you know your number! wel come!!")