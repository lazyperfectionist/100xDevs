function myownsetTimeout(callback,duration){
    setTimeout(() => {
        callback();
    }, duration);

}
function hello(){
    console.log("Hi there");
}
// myownsetTimeout(hello,5000);

function promisifiedmyownsetTimeout(duration){
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, duration);
    })
}
const p = promisifiedmyownsetTimeout(2000);
p.then(hello);
console.log(p);




