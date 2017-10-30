public class Node{
    private int value;
    private Node next;

    public Node(int value){
        this.value = value;
        this.next = null;
    }
    public Node next(){
        return this.next;
    }
    public void setNext(Node node){
        this.next = node;
    }
    public int getValue(){
        return this.value;
    }
}