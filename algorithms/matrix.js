arr = [[12, 34, 45, 56],
        [98, 87, 76, 65],
        [56, 67, 78, 89],
        [54, 43, 32, 21]]

find = [[67, 78],
        [43, 32]]


function matrixsearch(arr, find) {
    var found = false 

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i][j] == find[0][0]) {
                found = true
                // console.log(arr[i][j])
                for (var x = 0; x < find.length; x++) {
                    for (var y = 0; y < find.length; y++) {
                        if (find[x][y] == arr[i + x][j + y]) {
                            console.log(arr[i+x][j+y])
                            // if(find[x.length-1][y.length-1] == arr[i+x.length-1][j+y.length-1]){
                            //     return arr[i][j]
                            // }
                            // else{
                            //     return 
                            // }
                        }
                        else{
                            return [-1, -1]
                        }
                    }
                }
            }
            // else if(){
            //     console.log([-1, -1])
            // }
        }
    }
        if (found == false){
            return ([-1,-1])
        }
        else {
            return [i,j]
        }
    }



console.log(matrixsearch(arr, find))
