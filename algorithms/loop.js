
function SLLIST(){
    this.head = null;
}

function SLNODE(val){
    this.val = val;
    this.next = null; 
}

list = SLLIST()
var node1 = SLNODE(2)
var node2 = SLNODE(3)
var node2 = SLNODE(2)
var node2 = SLNODE(7)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node3
list.head = node1

// list ={ data: 1, next: {data: 2, next: {data: 3, next: null }}}

function loop(slist){
    var runner = this.head
    var dict = {} 

    while(runner.next != null){
        dict[key] = runner
        for(var i=0; i<dict.length; i++){
            if(runner.next == dict[i]){
                runner.next = null
                return true
            }
            else{
                return false
            }
        }
        runner = runner.next
    }
}

loop(list)
