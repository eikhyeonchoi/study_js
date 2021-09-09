let a = 1;
const add = function(a) {
    console.log(a);
    return ++a;
};

console.log(add(a+=3));