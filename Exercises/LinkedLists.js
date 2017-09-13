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

    this.addFront = function(val){
        var newNode = Node(val);
        if(!head){
            this.head = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    this.removeFront = function(){
        var removed = this.head;
        this.head = (this.head) ? this.head.next : undefined;
        return removed;
    }

    this.contains = function(val){
        var runner = this.head;
        while(runner){
            if(runner.value === val){
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    this.front = function(){
        return this.head ? this.head.value : null;
    }

    this.length = function(){
        var len = 0;
        var runner = this.head;
        while(runner){
            len += 1;
            runner = runner.next;
        }
        return len;
    }

    this.display = function(){
        var str = "";
        var runner = this.head;
        while(runner){
            str += runner.value;
            runner = runner.next;
            if(runner){
                str += " - ";
            }
        }
        return str;
    }

    this.max = function(){
        var max;
        var runner = this.head;
        if(runner){
            max = runner.value;
        }
        else{
            return undefined;
        }
        while(runner){
            if(runner.value > max){
                max = runner.value
            }
            runner = runner.next;
        }
        return max;
    }

    this.min = function(){
        var min;
        var runner = this.head;
        if(runner){
            min = runner.value;
        }
        else{
            return undefined;
        }
        while(runner){
            if(runner.value < min){
                min = runner.value
            }
            runner = runner.next;
        }
        return min;
    }
}

var list1 = new SLL();
list1.append(1);

console.log(list1.head);