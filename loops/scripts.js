function randomNum(num){
    return Math.floor(Math.random() * num)+1;
}

var counter = 0;
while(counter<10){
    var randnum = randomNum(6);
    document.write(randnum);
    counter = counter+1;
}