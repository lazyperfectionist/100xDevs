function findIndexOf(str,target){
    console.log("Original String : ",str);
    console.log("Index of " + target + " " + str.indexOf(target));
}

function replaceStr(str,target,replacement){
    console.log("Original String : ",str);
    console.log("After replacement : ", str.replace(target,replacement));
}

function splitstr(str,delim){
    console.log("Original String : ",str);
    console.log("After split : ", str.split(delim));
    let arr = str.split(delim);
    return arr;
}

function trimSpace(str){
    console.log("Original String : ",str);
    console.log("After Trim : ", str.trim());
}


console.log(parseFloat("44.34343anfjndfnr"));
console.log(parseInt("44.84343anfjndfnr"));
