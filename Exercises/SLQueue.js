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

