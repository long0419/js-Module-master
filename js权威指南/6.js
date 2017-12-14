var random = {
    get octet(){ return Math.floor(Math.random()*256); },
    get uint16(){ return Math.floor(Math.random()*66536); },
    get int16(){ return Math.floor(Math.random()*66536) - 32768; }
}


var p = {
    x : 1.0 ,
    y : 1.0 ,

    get r(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    } ,
    set r(newValue){
        var oldValue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newValue/oldValue ;
        this.x *= ratio ;
        this.y *= ratio ;
    },

    get theta(){
        return Math.atan2(this.y , this.x);
    }
}
