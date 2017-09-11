function Node(val){
    this.value = val
    this.next = undefined;
}

function SLL(){
    this.head = undefined;

    this.append = function(val){
        var newNode = new Node(val);
        var runner = this.head;
        if(!head){
            this.head = newNode;
        }
        while(runner.next){
            runner = runner.next;
        }
        runner.next = newNode;
        return runner.next;
    }
}

var list1 = new SLL();
list1.append(1);

console.log(list1.head);