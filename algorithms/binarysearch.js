

// function balanceindex(arr){
//     var sum = 0;
    
//     for (i=0; i<arr.length; i++){
//         sum += arr[i+2];
//         if (sum == arr[i]){
//             return "The balance index is " + arr[i+1]
//         }
//     }
// }
// console.log(balanceindex([1,2,3,4,6]))


function binarysearch(arr, y, start=0, end=arr.length-1) 
var midpoint = math.floor((start + end)/2) 

if (y == midpoint){
    return midpoint 
}

if(y < midpoint){
    end = mindpoint
    binarysearch(arr, y, start, end)
}

if(y > midpoint){
    start = midpoint 
    binarysearch(arr, y, start, end )
}

binarysearch([1,2,3,4,5,6,7,8,9], 6)