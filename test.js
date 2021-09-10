const a = {
    a: '1',
    b: '1',
};
console.log('a' in a); // true
console.log('b' in a); // true
console.log('c' in a); // false
console.log('toString' in a); // true
