// JavaScript File
function rivn(a,b,c) {
    var d;
    var x1;
    var x2;
    d=b*b-4*a*c;
    if (d>0) {
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);
        return [x1,x2];
    }
    else if (d==0) {
            x1=(-b/(2*a));
            return x1;
        }
        else {
            var str="No roots";
            return str;
        }
}
var res=[];
var k1=Number (prompt("Type coefficient a"));
var k2=Number (prompt("Type coefficient b"));
var k3=Number (prompt("Type coefficient c"));
res=rivn(k1,k2,k3);
alert (res);

