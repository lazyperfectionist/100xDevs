const fs = require('fs')

function readFile(){
    fs.readFile('a.txt','utf-8',function(err,data){
        if(!err){
            console.log(data);
        }
        else{
            console.log("File not Found");
        }
    })
}
readFile();

// let sum=0
// function findSum(){
//     for(let i=0;i<100000000;i++){
//         sum++;
//     }
//     console.log(sum);
// }
// setTimeout(findSum, 3000);
// console.log("hi There");
// console.log(sum+99);