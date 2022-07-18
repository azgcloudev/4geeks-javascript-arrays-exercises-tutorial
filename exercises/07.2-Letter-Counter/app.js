let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// your code here
let parArr = par.split('');

for (let element of parArr) {
    element = element.toLowerCase();
    if (counts[element] === undefined && element !== " ") {
        counts[element] = 1;
    } else if (counts[element] !== undefined && element !== " ") {
        counts[element] += 1;
    } else {
        continue;
    }
}

console.log(counts);