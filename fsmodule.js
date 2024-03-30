const fs = require('fs')

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

const a = fs.readFileSync('file.txt')
console.log(a.toString());

fs.writeFile('file2.txt', "this is a created text file", ()=> {
    console.log("Written");
})

b = fs.writeFileSync("file3.txt", "Created file for data2")
console.log(b);

console.log("Finished reading");