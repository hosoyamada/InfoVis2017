//Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
	return this;
}
Vec3.prototype.sub = function(v){
    this.x -=  v.x
    this.y -=  v.y
    this.z -=  v.z
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
AreaOfTriangle.prototype.gaiseki = function(va,vb){
    var ans = new Vec3(va.y*vb.z - va.z*vb.y , va.z*vb.x - va.x*vb.z , va.x*vb.y-va.y*vb.x);
    return ans;
}
AreaOfTriangle.prototype.ookisa = function(gaiseki){
    var ans = Math.sqrt(gaiseki.x*gaiseki.x+gaiseki.y*gaiseki.y+gaiseki.z*gaiseki.z);
    return ans;
}
//Constructor
AreaOfTriangle = function(v0,v1,v2)
{
    this.v0 = v0;
    this.v1 = v1;
    this.v2 = v2;
    var va = new Vec3(v1.x-v0.x, v1.y-v0.y, v1.z-v0.z);
    var vb = new Vec3(v2.x-v0.x, v2.y-v0.y, v2.z-v0.z);
    var gaiseki = gaiseki(va,vb);
    var sqr = ookisa(gaiseki);
    return sqr/2;
}

	return this;
