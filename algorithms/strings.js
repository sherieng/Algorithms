function stringtoArray(str){
    var arr = []
    var word = ""
    for(var i=0; i<str.length; i++){
        if(str.charAt([i]) != " "){
            word += str.charAt([i])
            console.log(word)
        }
        else if(str.charAt([i]) == " "){
            arr.push(word)
            word = ""
        }
    }
    arr.push(word)
    return console.log(arr)
}

// stringtoArray("Hello world!")


function reverseString(str){
    var arr = []
    var word = ""
    for(var i=0; i<str.length; i++){
        if(str.charAt([i]) != " "){
            word += str.charAt([i])
            console.log(word)
        }
        else if(str.charAt([i]) == " "){
            arr.push(word)
            word = ""
        }
    }
    arr.push(word)

    var arr2 = []
    for(var j=arr.length-1; j>0; j--){
        arr2.push(arr[j])
    }
    return console.log(arr2)
}

reverseString("Hello world!")

// function stringtoArray(str){
//     var arr = []
//     var word = "";
//     for(var i=0; i<str.length; i++){
//         if(str.charAt([i] != " ")){
//             for(var j = i; j < str.length; j++){
//                 if(str.charAt([j] == " ")){
//                     // console.log(word)
//                     arr.push(word)
//                     word = ""
//                     break
//                     }
//                 word += str[j]
//                 console.log(word)
//             }
//         }
        
//     }
//     return console.log(arr)
// }

//stringtoArray("Hello world")