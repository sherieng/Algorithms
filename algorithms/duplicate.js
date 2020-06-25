
function removeDuplicates(arr){
    newArr = []
    newArr.push(arr[0])
    for (var i = 0; i < arr.length; i++){
        for (var j = i+1; j < arr.length; j++){
            if(arr[j] != newArr[j]){
                break;
                
                console.log(arr[i], arr[j], newArr[j], newArr)
            }
        newArr.push(arr[j])
        }
        
    }
    console.log(newArr)
}
removeDuplicates([1, 1, 2, 3, 4, 4, 4, 5, 6, 7])
// output will be [1, 2, 3, 4, 5, 6, 7]