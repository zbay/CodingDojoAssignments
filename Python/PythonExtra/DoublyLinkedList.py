class Node(object):
    def __init__(self, val):
        self.value = val
        self.next = None
        self.prev = None
    def printNode(self):
        print self.value + " - Has next? " + str(self.next != None) + " - Has prev? " + str(self.prev != None)

class DoublyLinkedList(object):
    def __init__(self):
        self.head = None
        self.tail = None

    def AddBack(self, val):
        newNode = Node(val)
        if self.tail == None:
            self.head = newNode
            self.tail = newNode
            return self
        newNode.prev = self.tail
        self.tail.next = newNode
        self.tail = newNode
        return self
    
    def DeleteNode(self, val):
        runner = self.head
        if self.head.value == val:
            self.head = self.head.next
            runner.next.prev = None
            return self
        if self.tail.value == val:
            self.tail = self.tail.prev
            self.tail.next = None
            return self
        while runner != None:
            if val == runner.value:
                print "Deleting: " + runner.value
                if runner.prev != None:
                    runner.prev.next = runner.next
                if runner.next != None:
                    runner.next.prev = runner.prev
                return self
            runner = runner.next
        return self

    def InsertNode(self, valBefore, val): # I'll insert after
        newNode = Node(val)
        if self.tail.value == valBefore:
            return self.AddBack(val)
        if self.head.value == valBefore:
            self.head.prev = newNode
            newNode.next = self.head
            self.head = newNode
            return self
        runner = self.head
        while runner != None:
            if valBefore == runner.value:
                newNode.next = runner.next
                runner.next = newNode
                newNode.prev = runner
                return self
            runner = runner.next
        return self

    def PrintAllVals(self):
        print "List Contents:"
        print "--------------"
        runner = self.head
        while runner != None:
            runner.printNode()
            runner = runner.next
        return self
        
dll = DoublyLinkedList()
dll.AddBack("Alex")
dll.AddBack("Barron")
dll.AddBack("Carl")
dll.DeleteNode("Barron")
dll.AddBack("Darrel")
dll.InsertNode("Carl", "Emma")
dll.InsertNode("Darrel", "Fred").PrintAllVals()
'''Goals:
1. Add new node to end of list
2. Delete existing node
3. Insert node between existing nodes (by value)
'''