var timer = 60;
var score = 0;
var newhitrn = 0;

function makebubble(){
    var clutter = "";

for( var i = 1; i<=250; i++){

    var rn = Math.floor(Math.random()*10);
     clutter += ` <div class="bubble">${rn}</div>` //+= ka matlab hai clutter me purani value save karlo and nai value ko add kardo
}

document.querySelector("#pbtm").innerHTML=clutter;

}
function getnewhit(){
    
    newhitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = newhitrn;
}
function changetimer(){
        var interval = setInterval(function(){
            if(timer > 0 ){
                timer --;
            document.querySelector("#timeval").textContent = timer;
            }
            else{
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
                clearInterval(timer);
            }
        },1000)
}
function changescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

var a = document.querySelector("#pbtm").addEventListener("click",function(detils){
var clickednum = (Number(detils.target.textContent));

if(clickednum === newhitrn){
    changescore();
    getnewhit();
    makebubble();
}

})
makebubble();
getnewhit();
changetimer();

