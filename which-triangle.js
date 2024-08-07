let log = console.log
let a = 10, b = 20, c = 30

if (a==b && b==c && c==a) {
   log('equilateral')
} else if ( a!=b && b!=c && c!=a) {
   log('Scales')
} else {
   log('Isoscales')
}