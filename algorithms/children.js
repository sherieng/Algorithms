



function children(list){
    var runner = this.head
    temp = runner.next
    // var childrunner = this.head

    while (runner.next != null){
        if(runner.children.next!=null){
            temp =runner.next
            runner.next = runner.children
            while (runner.next != null){ 
                
                runner = runner.next
            }
        }
        else{
            runner.next = temp
        }
        runner = runner.next
    }
}

