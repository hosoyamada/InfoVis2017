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
    this.x = this.y*v.z - this.z*v.y;
    this.y = this.z*v.x - this.x*v.z;
    this.z = this.x*v.y - this.y*v.x;
    return this;
}

Vec3.prototype.dot = function(v){
    return  this.x*v.x + this.y*v.y + this.z*v.z;
}

Vec3.prototype.magnitude = function(){
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

function AreaOfTriangle(v0,v1,v2)
{
    
    var a = v1.sub(v0);
      document.write(a.x + a.y + a.z);
      document.write("<br>");
    var b = v2.sub(v0);
      document.write(b.x + b.y + b.z);
      document.write("<br>");
    var c = a.cross(b);
      document.write(c.x + c.y + c.z);
      document.write("<br>");
    var s = c.magnitude();
      document.write(s);
      document.write("<br>");
    return s/2;
}
