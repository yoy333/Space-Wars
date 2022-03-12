var keys = {
    W:false,
    A:false,
    S:false,
    D:false
}
var u = () => logKey(event, false)
var d = () => logKey(event, true)
var logKey = function(e, v) {
  
    switch(e.code) {
        default:return;
        case "KeyW": keys.W = v;
        case "KeyA": keys.A = v;
        case "KeyS": keys.S = v;
        case "KeyD": keys.D = v;
    }
    

  }

window.addEventListener("keydown", d, true);
window.addEventListener("keyup", u, true);