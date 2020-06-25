function partition(arr){
    var pivot = 0
    for(var i=1; i < arr.length; i++){
        for (var j=0; j< arr.length; j++){
            if(arr[i]< arr[pivot]){
                temp = arr[pivot]
                arr[pivot] = arr[j] 
                arr[j] = temp
                console.log(arr)
            }
            else if(arr[i]> arr[pivot]){ 
                j++
            }
        }
    }
    return console.log(arr)
}


partition([5,4,9,2,9,3])