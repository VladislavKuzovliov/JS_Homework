function divideArr(array,subArrayLength){
var newDivide=[];

    array.forEach(function (item,i) {
        if ((i+1)%subArrayLength==0){
            newDivide[(i+1)/subArrayLength-1]=array.slice((i+1-subArrayLength),i+1);
        }
    });
     if ((array.length)%subArrayLength!=0){
         newDivide[newDivide.length]=array.slice((array.length-(array.length%subArrayLength)),array.length);
     }
return newDivide;
}


console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
