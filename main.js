let first = ['non', 'asal', 'banan', 'olma', 'Aziza', 'Gul', 'mashina',]

let n = 'n';

let second = first.filter((v, i, arr) => v.includes(n))
let third = first.filter((v, i, arr) => !v.includes(n))

console.log(`${second}${"  'n harifi ishtrok etgan sozlar'"}`);
console.log(`${third}${"  'n harifi ishtrok etmagan sozlar'"}`);