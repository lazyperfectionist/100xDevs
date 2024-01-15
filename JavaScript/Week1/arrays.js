let arr = [1,2,3,4,5]
console.log(arr);
//Push
arr.push(6)
console.log(arr);
//Pop
arr.pop()
console.log(arr);
//Shift
arr.shift()
console.log(arr);
//Unshift
arr.unshift(0)
console.log(arr);

// Concat two arrays
arr2 = ['a','b','c','d','e','f']
final = arr.concat(arr2)
console.log(final);

// Trying to push
final2  = []
for(let i=0;i<arr2.length;i++){
    arr.push(arr2[i])
}
console.log(arr);