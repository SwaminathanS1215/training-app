// If else program
var num = 25;
if (num >= 18) {
    console.log('eligible for voting');
}
else {
    console.log('not eligible for voting');
}
// N Prime numbers
var nPrimeNumber = 50;
for (var num_1 = 1; num_1 <= nPrimeNumber; num_1++) {
    var count = 0;
    for (var i = 2; i <= num_1 / 2; i++) {
        if (num_1 % i === 0) {
            count++;
            break;
        }
    }
    if (count === 0 && num_1 != 1) {
        console.log(num_1);
    }
}
