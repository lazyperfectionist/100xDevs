// const date = new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.getUTCDay());
// console.log(date.getFullYear());
// console.log(date.getMonth()+1);





// const users = '{"name" : "Shivansh", "age" : 22, "gender": "male"}'
// const user = JSON.parse(users);
// console.log(user);
// console.log(user['name']);
// struser = JSON.stringify(user);
// console.log(struser);






// Object Class
// const obj = {"name" : "Shivansh", "age" : 22, "gender": "male"}

// let keys = Object.keys(obj)
// console.log(keys);

// values = Object.values(obj)
// console.log(values);

// entries = Object.entries(obj)
// console.log(entries);

// has = Object.hasOwnProperty("name")
// console.log(has);


// let newObj = Object.assign({},obj,  {"company":"wipro"})
// console.log(newObj);





// Callback Functions : 

function square(val1){
    return val1*val1;
}
function cube(val1){
    return val1*val1*val1;
}   
function sum(val1,val2,fn){
    return fn(val1)+fn(val2) 
}

console.log(sum(2,3,square));