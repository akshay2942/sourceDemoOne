const count = {}
const sampleArray = [1,1,2,3,6,5,2,1,1,2,3,6,5]
sampleArray.forEach(function(x){
    count[x] = (count[x] || 0) + 1

})

// console.log(count)


var a = [true, false, false, false];
const aa = a.filter(function(value){
    return value === false;
}).length  
console.log(aa)