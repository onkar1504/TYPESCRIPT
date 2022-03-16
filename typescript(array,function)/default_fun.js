function area(radius, pi) {
    if (pi === void 0) { pi = 3.14; }
    var ans = 0;
    ans = pi * radius * radius;
    return ans;
}
var no = 10.2;
var ret = 0;
ret = area(no, 7.12);
console.log("area is: ", ret);
ret = area(no);
console.log("area is: ", ret);
