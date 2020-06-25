x = [
    [333,222,111,232],
    [123,123,321,321],
    [321,321,123,123]
    ]

y=  [
    [123,123],
    [321,321]
    ]

function matrixsearch(arr,arr2){ 
    if(arr.length<arr2.length){
        return "Matrix is smaller than second matrix"
    }
    order1 = arr2[0]
    order2 = arr2[1]
    for(var i=0; i<arr2.length; i++){
        continue
    }
    for(var j=0; j<arr.length; j++){
        if(arr.includes(order1)){
            console.log("True")
            console.log(order1, order2)
        }
    }

}
console.log(matrixsearch(x,y))



//     for(i=0; i<arr.length; i++){
//         for (j=0; j<arr.length; j++){
//             if (arr[i][j] ==arr2[i][j]){
                
//             }

//         }
    

// }
// arr.length = k;
// }
