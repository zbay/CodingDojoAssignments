public class SLL{
    private Node head;

    public SLL(){
        this.head = null;
    }
    public void add(int val){
        Node newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
        }
        else{
            Node runner = this.head;
            while(runner.next() != null){
                runner = runner.next();
            }
            runner.setNext(newNode);
        }
    }
    public void remove(){
        if(this.head != null){
            if(this.head.next() == null){
                this.head = null;
            }
            Node runner = this.head;
            while(runner.next().next() != null){
                runner = runner.next();
            }
            runner.setNext(null);    
        }  
    }
    public void printValues(){
        Node runner = this.head;
        while(runner != null){
            System.out.print(runner.getValue() + " ");
            runner = runner.next();
        }
        System.out.println();
    }

    public Node find(int val){
        Node runner = this.head;
        while(runner != null){
            if(runner.getValue() == val){
                return runner;
            }
            runner = runner.next();
        }
        return null;
    }

    public void removeAt(int index){
        Node prev = this.head;
        Node runner = this.head;
        int count = 0;
        while(runner != null){
            if(count == index){
                prev.setNext(runner.next());
            }
            prev = runner;
            runner = runner.next();
            count++;
        }
    }

}