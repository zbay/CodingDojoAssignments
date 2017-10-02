function SLNode(value){
    this.val = value;
    this.next = null;
}

function SLQueue(){
    var head = null;
    var tail = null;

    this.enqueue = function(val){
        var newNode = new SLNode(val);
        if(!this.tail){
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;  
    }

    this.dequeue = function(){
        if(!this.head){
            return this;
        }
        var returnVal = this.head.val;
        if(!this.head.next){
            this.tail = null;
        }
        this.head = this.head.next;
        return returnVal;
    }

    this.front = funtion(){
        if(this.head){
            return this.head.val;
        }
        return this.head;
    }

    this.empty = function(){
        return !this.head;
    }

    this.contains = function(val){
        var runner = this.head;
        while(runner){
            if(runner.val === val){
                return true;
            }
        }
        return false;
    }

    this.size = function(){
        var count = 0;
        var runner = this.head;
        while(runner){
            count++;
            runner = runner.next;
        }
        return count;
    }

    this.reorderAbsolute = function(){
        if(this.size < 2){
            return this;
        }
        var buffer = new SLStack();
        var queueSize = this.size();
        for(var i = 0; i < queuesize; i++){
            var temp = this.dequeue();
            if(temp < 0){
                buffer.push(temp);
            }
            else{
                this.enqueue(temp);
            }
        }
        var numPositives = this.size();
        while(!buffer.empty()){
            this.enqueue(buffer.pop());
        }
        for(i = 0; i < numPositives; i++){
            this.enqueue(this.dequeue());
        }
        return this;
    }
}

function SLStack(){
    top = undefined;

    this.pop = function(){
        if(!top){
            return top;
        }
        var returnThis = top.val;
        top = top.next;
        return returnThis;
    }

    this.push = function(val){
        var newNode = new SLNode(val);
        newNode.next = top;
        top = newNode;
    }

    this.contains = function(val){
        if(!top){
            return false;
        }
        var buffer = new SLStack();
        var isFound = false;
        while(top && !isFound){
            if(top.val === val){
                isFound = true;
            }
            buffer.push(this.pop());
        }
        while(!buffer.empty()){
            this.push(buffer.pop());
        }
        return isFound;
    }

    this.top = function(){
        if(top){
            return top.val;
        }
        return top;
    }

    this.empty = function(){
        return !top;
    }

    this.size = function(){
        if(!top){
            return 0;
        }
        var count = 0;
        var buffer = new SLStack();
        while(top){
            buffer.push(this.pop());
            count++;
        }
        while(!buffer.empty){
            this.push(buffer.pop);
        }
        return count;
    }

    this.isPalindrome = function(){
        var buffer = new SLStack();
        if(!this.front){
            return true;
        }
        for(var i = 0; i < this.size(); i++){
            var temp = tis.dequeue();
            this.enqueue(temp);
            buffer.push();
        }
        var symmetrical = true;
        while(!buffer.isEmpty()){
            var temp = this.dequeue();
            if(temp.val !== buffer.pop().val){
                symmetrical = false;
            }
            this.enqueue(temp);
        }
        return symmetrical;
    }
    this.removeMin = function(){
        var buffer = new SLQueue();
        if(this.top === undefined){
            return this.top;
        }
        var min = this.top.val;
        while(!this.empty()){
            var popped = this.pop();
            if(popped.val < min){
                min = popped.val;
            }
            buffer.enqueue(popped);
        }
        while(!buffer.empty()){
            var dq = buffer.dequeue();
            if(dq.val !== min){
                this.push(dq);
            }
        }
        return this;
    }
    
    this.partition = function(){
        var buffer = new SLQueue();
        if(this.top == undefined){
            return this.top;
        }
        while(!this.empty()){
            buffer.enqueue(this.pop());
        }
        var bufferLength = buffer.size();
        for(var i = 0; i < bufferLength; i++){
            var dq = buffer.dequeue();
            if(dq.val > 0){
                this.push(dq);
            }
            else{
                buffer.enqueue(dq);
            }
            while(!buffer.empty()){
                this.push(buffer.dequeue());
            }
        }
        return this;
    }
    
    this.isSorted = function(){
        if(this.size() < 2){
            return true;
        }
        var buffer = new SLStack();
        var sorted = true;
        var prev = this.pop();
        while(!this.empty()){
            var next = this.pop();
            buffer.push(prev);
            if(prev > next){
                sorted = false;
                prev = next;
                break;
            }
            prev = next;
        }
        this.push(prev);
        while(!buffer.empty()){
            this.push(buffer.pop());
        }
        return sorted;
    }

    this.switchPairs = function(){
        if(this.size() < 2){
            return this;
        }
        var buffer = new Queue();
        while(!this.empty()){
            buffer.enqueue(this.pop());
        }
        while(!buffer.empty()){
            if(buffer.size() > 2){
                rotations = buffer.size()-2;
                for(var i = 0; i < rotations; i++){
                    buffer.enqueue(buffer.dequeue());
                }
                this.push(buffer.dequeue());
                this.push(buffer.dequeue());
            }
            else{
                this.push(buffer.dequeue());
            }
        }
        return this;
    }

    this.mirror = function(){
        if(this.empty()){
            return this;
        }
        var buffer = new Queue();
        while(!this.empty()){
            buffer.enqueue(this.pop());
        }
        for(var i = 0; i < buffer.size(); i++){
            var temp = buffer.dequeue();
            this.push(temp);
            buffer.enqueue(temp);
        }
        while(!buffer.empty()){
            for(var j = 0; j < buffer.size()-1; j++){
                buffer.enqueue(buffer.dequeue());
            }
            this.push(buffer.dequeue());
        }
        return this;
    }
}

// stack methods