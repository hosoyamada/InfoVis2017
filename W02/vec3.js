//Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
	return this;
}

Vec3.prototype.sub = function(a){
    this.x -=  a.x;
    this.y -=  a.y;
    this.z -=  a.z;
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

Vec3.prototype.cross = function(a){
    this.x = this.y*a.z - this.z*a.y;
    this.y = this.z*a.x - this.x*a.z;
    this.z = this.x*a.y - this.y*a.x;
    return this;
}

Vec3.prototype.dot = function(a){
    return  this.x*a.x + this.y*a.y + this.z* a.z;
}

Vec3.prototype.magnitude(){
    return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
}

function AreaOfTriangle(v0,v1,v2)
{
    var a = v1.sub(v0);
    var b = v2.sub(v0);
    var c = a.cross(b);
    var s = c.magnitude();
    return s/2;
}
