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
}