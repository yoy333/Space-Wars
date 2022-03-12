var character  = function(color){
    this.color = color;
    this.size = 50;
};
character.prototype.animate = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(0, 0, this.size, this.size);
}
character.prototype.frame = function(){
    this.animate();
}