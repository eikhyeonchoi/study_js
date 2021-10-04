
function three() {
    console.log("three");
}
function two() {
    three();
}
function one() {
    two();
}
function zero() {
    one();
}

zero();
