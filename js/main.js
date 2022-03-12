const c = document.getElementById('screen')
const ctx = c.getContext('2d');
let height = $(window).height();
let width = $(window).width();
$("screen").hide();
function resizeCanvas() {
    c.style.width = window.innerWidth + "px";
    width = window.innerWidth
    setTimeout(function() {
      c.style.height = window.innerHeight + "px";
      height = window.innerHeight
    }, 0);
};
resizeCanvas();
window.onresize = resizeCanvas;

var characterArray = []

function startUp(){
  characterArray.push(new character("red"))
}

function animate(){
  ctx.fillStyle = "white";
  ctx.fillRect(0,0,width,height)
  characterArray.forEach((e)=>{
    e.frame()
  })
  window.requestAnimationFrame(animate);  
}

$(document).ready(function(){
  console.log("here")
  startUp();
  $("button#start").on("click", function(){
    $("div#startScreen").hide()
    window.requestAnimationFrame(animate);
  })
})
