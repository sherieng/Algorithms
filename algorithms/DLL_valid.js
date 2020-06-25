function dll_valid(list){
    var runner = this.head
    var follower = this.head

    if (this.head.previous == null){
        follower = runner
        runner = runner.next
        }
    if(this.tail.next != null){
        return false
    }
    while(runner != null){
        if(runner.previous == follower && follower.next == runner){
            continue; 
        }
        else{
            return false
        }
        follower = runner
        runner = runner.next
    }
}


function reverse(list){
    var runner = this.head

    // if(runner.previous == null){
    //     this.head.next == null
    //     runner = runner.next
    //     this.head.previous == runner
    // }
    while(runner != null){
        runner = runner.next

        var temp = runner.next
        runner.next = runner.previous
        runner.previous = temp 
        
        temp = runner
    }
    var temp2 = this.head
    this.head = this.tail
    this.tail = temp2
}

//check previous
//check next

