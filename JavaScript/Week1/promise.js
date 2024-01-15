// function myownsetTimeout(callback,duration){
//     setTimeout(() => {
//         callback();
//     }, duration);

// }
// function hello(){
//     console.log("Hi there");
// }
// // myownsetTimeout(hello,5000);

// function promisifiedmyownsetTimeout(duration){
//     return new Promise(function(resolve){
//         setTimeout(() => {
//             resolve();
//         }, duration);
//     })
// }
// const p = promisifiedmyownsetTimeout(2000);
// p.then(hello);
// console.log(p);










function myownsetTimeout(){
    return new Promise((resolve,reject)=>{
        // resolve();
        reject(new Error('Somethins wrong'));
    });
}
function hi(){
    console.log("Hi this is resolved now");
}
function bye(){
    console.log("Hi this is not resolved now");
}
myownsetTimeout().then(hi).catch();







