//Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

Vec3.prototype.add = function(v){
    this.x +=  v.x;
    this.y +=  v.y;
    this.z +=  v.z;
    return this;
}

Vec3.prototype.sub = function(v){
    this.x -=  v.x;
    this.y -=  v.y;
    this.z -=  v.z;
    return this;
}

Vec3.prototype.max = function(){
    return Math.max(this.x,this.y,this.z);
}

Vec3.prototype.min = function(){
    return Math.min(this.x,this.y,this.z);
}

Vec3.prototype.mid = function(){
    return (this.x+this.y+this.z)-(this.max()+this.min());
}

Vec3.prototype.cross = function(v){
    var a = new Vec3(this.y*v.z - this.z*v.y,this.z*v.x - this.x*v.z,this.x*v.y - this.y*v.x)
    return a;
}

Vec3.prototype.dot = function(v){
    return  this.x*v.x + this.y*v.y + this.z*v.z;
}

Vec3.prototype.magnitude = function(){
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

function AreaOfTriangle(v0,v1,v2)
{

      document.write("a");    
    var b = v2.sub(v0);
      document.write("b");
    var c = a.cross(b);
      document.write("c");
    var s = c.magnitude();
      document.write("d");
    return s/2;
      document.write("e");
}
