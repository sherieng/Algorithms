function priQueue(){
    this.head = null

    this.push = function(node){
        let runner = this.head.next
        let currentPri = node
        let follower = this.head
        while(runner != null){
            if(runner.pri < currentPri.pri){
                follower = runner
                runner = runner.next
                
            }
            if(currentPri.pri <= runner.pri){
                follower.next = node
                node.next = runner
                return
            }
        }
        if(runner == null){
            follower.next = node
            node.next = null
        }
    }
    this.pop = function(){
        let runner = this.head
        // let currentPri = node
        // let follower = this.head
        if(runner != null){
            this.head = this.head.next
            runnner.next = null
        }
        return runner;
    }
}