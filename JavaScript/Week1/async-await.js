// const fs = require('fs');

// async function read(){
//     fs.readFile('a.txt','utf-8',(err,data)=>{
//         // let data1 = await data;
//     });
// }
// read();
// console.log("Hi");



function a(){
    return new Promise(function(resolve){
        console.log("Inside Promise");
        let x=100;
        setTimeout(()=>{resolve(x)},2000);
    })
}
function sum(x){
    let sum=0
    for(let i=1;i<=x;i++){
        sum+=i;
    }
    console.log(sum);
}
async function main(){
    let pr = await a();
    console.log(pr);
}



main();
// this comes immediately : 
console.log("Waiting");







// function pr(){
//     return new Promise(function(x){
//         x();
//     });
// }
// function run(){
//     console.log("hello");
// }
// console.log(pr().then(run));


