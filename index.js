const fs = require ("fs")

console.log(new Date().toLocaleDateString(),new Date().toLocaleTimeString(),"Starting to read File");

let filePath = "./data.txt";

console.log(new Date().toLocaleDateString(),new Date().toLocaleTimeString(),"Starting to Write File");
fs.writeFile(filePath,"Hello all i am learning node.js",{encoding: "utf8"},(err) => {
    if(!err) {
        console.log(new Date().toLocaleDateString(),new Date().toLocaleTimeString(),"File Written");
    }

})