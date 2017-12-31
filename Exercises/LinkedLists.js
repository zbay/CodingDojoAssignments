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

    this.concat = function(list){
        var runner = this.head;
        if(!runner){
            this.head = list.head;
            return this;
        }
        while(runner.next){
            runner = runner.next;
        }
        runner.next = list.head;
        return this;
    }

    this.splitOnVal = function(val){
        var runner = this.head;
        var prev;
        if(this.head.value === val){
            return this;
        }
        while(runner){
            if(runner.value === val){
                prev.next = null;
                var newList = new SLL();
                newList.head = runner;
                return newList;
            }
            prev = runner;
            runner = runner.next
        }
        return this;
    }

    //how to do this in place? use pointers to beginning and end of a list?
    this.partition = function(val){
        var runner = this.head;
        var lessList = new SLL();
        var equalList = new SLL();
        var greaterList = new SLL();

        while(runner){
            if(runner.val < val){
                lessList.addBack(runner.val);
            }
            else if(runner.val === val){
                equalList.addBack(runner.val);
            }
            else{ // runner.val > val
                greaterList = new SLL();
            }
            runner = runner.next;
        }
        return lessList.concat(equalList.concat(greaterList));
    }

    this.minToFront = function(){
        if(this.head){
            return this;
        }
        var runner = this.head;
        var prev;
        while(runner.next){
            if(runner.next.value < min.value){
                min = runner.next;
                prev = runner;
            }
            runner = runner.next;
        }
        return this;
    }

    this.maxToBack = function(){
        if(!this.head){
            return this;
        }
        var runner = this.head;
        var previous = this.head
        var max = this.head;
        var maxPrevious = this.head;
        while(runner){
            if(current.val > max.val){
                max = current;
                maxPrevious = previous;
            }
            previous = current;
            current = current.next;
        }
        maxprevious.next = max.next;
        previous.next = max;
        max.next = null;
        return this;
    }

    this.secondLargest = function(){
        if(!this.head || !this.head.next){
            return undefined;
        }
        var largest = this.head.value;
        var secondLargest = this.head.value;
        var runner = this.head.next;
        while(runner){
            if(runner.val > largest){
                secondLargest = largest;
                largest = runner.value;
            }
            else{
                if(runner.val > secondLargest){
                    secondLargest = runner.value;
                }
            }
            runner = runner.next;
        }
        return secondLargest;
    }

    this.copy = function(){
        if(!this.head){
            return this;
        }
        var runner = this.head;
        var newList = new SLL();
        while(runner){
            newList.addBack(runner.value);
            runner = runner.next;
        }
        return newList;
    }

    this.secondToLast = function(){
        if(!this.head || !this.head.next){
            return undefined;
        }
        var runner = this.head;
        while(runner){
            if(!runner.next.next){
                return runner.value;
            }
            runner = runner.next;
        }
    }

    this.removeNegative = function(){
        if(!this.head){
            return this;
        }
        var prev;
        while(this.head && this.head.val > 0){
            this.head = this.head.next
        }
        var runner = this.head;
        while(runner){
            if(runner.value < 0){
                prev.next = runner.next;
            }
            else{
                prev = runner;
            }
            runner = runner.next;
        }
        return this;
    }

    this.reverse = function(){
        let runner = this.head;
        let prev;
        while(runner){
            /*
            Save next node. Set node's next to prev. Set prev to current node and runner to the saved next node. Keep going while there's a next node
            */
            let temp = runner.next;
            runner.next = prev;
            prev = runner;
            runner = temp;
        }
        return prev;
    }

    this.palindrome = function(){
        if(this.size() < 2){
            return true;
        }
        let runner = this.head;
        let compareIndex = this.size()-1;
        while(compareIndex >= Math.floor(this.size()/2)){
            let compareRunner = this.head;
            for(let i = 0; i < compareIndex; i++){
                compareRunner = compareRunner.next;
            }
            if(runner.val !== compareRunner.value){
                return false;
            }
            runner = runner.next;
            compareIndex--;
        }
    }

    this.createLoop = function(numNodes, loopIndex){
        let runner = this.head;
        let joinNode;
        for(let i = 0; i < numNodes; i++){
            if(i === loopConnect){
                joinNode = runner;
            }
            if(i !== numNodes-1){
                runner = runner.next;
            }
        }
        runner.next = joinNode;
        return this;
    }

    this.hasLoop = function(){ // assumes that the values are unique. otherwise, do the breadcrumb method
        let slowRunner = this.head;
        let fastRunner = this.head;
        while(fastRunner){
            if(!fastRunner.next || !fastRunner.next.next){
                return false;
            }
            slowRunner = slowRunner.next;
            fastRunner = fastRunner.next.next;
            if(slowRunner === fastRunner){
                return true;
            }
        }
        return false;
    }

    this.breakLoop = function(){ 
// the difference between distance from head to intersection and the size of the loop = number of times to increment runner before setting next to undefined
        let slowRunner = this.head;
        let fastRunner = this.head;
        while(fastRunner){
            if(!fastRunner.next || !fastRunner.next.next){
                return this;
            }
            slowRunner = slowRunner.next;
            fastRunner = fastRunner.next.next;
            if(slowRunner === fastRunner){   
                let loopSize = 0;
                fastRunner = fastRunner.next;
                while(fastRunner !== slowRunner){
                    loopSize++;
                    fastRunner = fastRunner.next;
                }
                let distToIntersection = 0;
                let thirdRunner = this.head;
                while(thirdRunner !== slowRunner){
                    distToIntersection++;
                    thirdRunner = thirdRunner.next;
                }
                let diff = Math.abs(distToIntersection-loopSize);
                while(diff > 0){
                    slowRunner = slowRunner.next;
                    diff--;
                }
                slowRunner.next = undefined;
            }
        }
        return this;        
    }

    this.swapPairs = function(){
        let runner = this.head;
        while(runner && runner.next){
            let nextRunner = runner.next.next;
            let temp = runner.next;
            temp.next = runner;
            runner.next = nextRunner;
            runner = nextRunner;
        }
        return this;
    }


    //doubly linked lists
    this.pushBack = function(val){
        let newNode = newNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        newNode.prev = thisl.tail;
        this.tail = newNode;
        return this;
    }
    this.pushFront = function(val){
        let newNode = newNode(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        return this;
    }
    this.popBack = function(){
        if(!this.head){
            return this;
        }
        let returnVal = this.tail.val;
        if(this.head === this.tail){
            this.tail = undefined;
            this.head = undefined;
            return returnVal;
        }
        this.tail = this.tail.prev;
        this.tail.next = undefined;
        return returnVal;
    }
    this.popFront = function(){
        if(!this.head){
            return this;
        }
        let returnVal = this.tail.val;
        if(this.head === this.tail){
            this.tail = undefined;
            this.head = undefined;
            return returnVal;
        }
        this.head = this.head.next;
        this.head.prev = undefined;
        return returnVal;       
    }
    this.contains = function(val){
        let runner = this.head;
        while(runner){
            if(runner.val === val){
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    this.size = function(){
        let runner = this.head;
        let count = 0;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }
}

var list1 = new SLL();
list1.append(1);

console.log(list1.head);