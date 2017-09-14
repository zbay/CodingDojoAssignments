function Node(val){
    this.value = val
    this.next = undefined;
}

function SLL(){
    this.head = undefined;

    this.addBack = function(val){
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

    this.appendVal = function(val, after){
        var newNode = new Node(val);
        var prev;
        var runner = this.head;
        while(runner){
            if(runner.value === after){
                newNode.next = runer.next;
                runner.next = newNode;
                return this.head;
            }
            prev = runner;
            runner = runner.next;
        }
        if(prev){
            prev.next = newNode;
        }
        else{
            this.head = newNode;
        }
        return this;
    }

    this.prependVal = function(val, before){
        var newNode = new Node(val);
        var runner = this.head;
        if(!this.head){
            return this.head;
        }
        if(this.head.value === before){
            newNode.next = this.head;
            this.head = newNode;
            return this;
        }
        while(runner.next){
            if(runner.next.value === val){
                newNode.next = runner.next;
                runner.next = newNode;
                return this;
            }
            runner = runner.next;
        }
        runner.next = newNode;
        return this;
    }

    this.removeVal = function(val){
        var runner = this.head;
        if(!this.head){
            return this;
        }
        if(this.head.value === remove){
            this.head = this.head.next;
            return this;
        }
        while(runner.next){
            if(runner.next.value === remove){
                runner.next = runner.next.next;
                return this;
            }
            runner = runner.next;
        }
        return this;
    }

}

var list1 = new SLL();
list1.append(1);

console.log(list1.head);