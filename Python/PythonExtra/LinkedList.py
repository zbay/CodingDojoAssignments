class SLNode(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class SList(object):
    def __init__(self):
        self.head = None
        self.tail = None
    
    def PrintAllVals(self):
        print "List Contents:"
        print "--------------"
        runner = self.head
        while runner != None:
            print runner.value
            runner = runner.next
        return self
    
    def AddBack(self, val):
        newNode = SLNode(val)
        if self.head == None and self.tail == None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = self.tail.next
        return self

    def AddFront(self, val):
        newNode = SLNode(val)
        if self.head == None and self.tail == None:
            self.head = newNode
            self.tail = newNode
        else:
            newNode.next = self.head
            self.head = newNode
        return self
    
    def InsertBefore(self, nextVal, val):
        runner = self.head
        newNode = SLNode(val)
        if self.head.value == nextVal:
            self.AddFront(val)
            return self
        while (runner != None) and (runner.next != None):
            if runner.next.value == nextVal:
                newNode.next = runner.next
                runner.next = newNode
                return self
            runner = runner.next
        return self
    
    def InsertAfter(self, prevVal, val):
        runner = self.head
        newNode = SLNode(val)
        while runner != None:
            if runner.value == prevVal:
                newNode.next = runner.next
                runner.next = newNode
                return self
            runner = runner.next
        return self
    
    def RemoveNode(self, val):
        if self.head.value == val:
            self.head = self.head.next
            return self
        runner = self.head
        prev = None
        while runner != None:
            if runner.value == val:
                prev.next = runner.next
                return self
            prev = runner
            runner = runner.next
        return self
    
    def ReverseList(self):
        runner = self.head
        nxt = None
        prev = None
        while runner != None: 
            # 1. save the next node before reassignment
            # 2. set current node's .next to prev
            # 3. set current node as prev
            # 4. advance to the original next node
            # 5. set head to the last non-None value
            nxt = runner.next
            runner.next = prev
            prev = runner
            runner = nxt
        self.head = prev
        return self

        


linked = SList()
linked.AddBack('Alice') # Alice
linked.AddBack('Chad') # Alice, Chad
linked.AddBack('Debra') # Alice, Chad, Debra
linked.AddBack("Earl") # Alice, Chad, Debra, Earl
linked.AddFront("Frank") # Frank, Alice, Chad, Debra, Earl
linked.InsertBefore("Frank", "Gina") # Gina, Frank, Alice, Chad, debra, Earl
linked.InsertBefore("Earl", "Harold") #Gina, Frank, Alice, Chad, Debra, Harold, Earl
linked.InsertAfter("Debra", "Isabel") # Gina, Frank, Alice, Chad, Debra, Isabel, Harold, Earl
linked.ReverseList().PrintAllVals() # Earl, Harold, Isabel, Debra, Chad, Alice, Frank, Gina
linked.RemoveNode("Debra").PrintAllVals() # Earl, Harold, Isabel, Chad, Alice, Frank, Gina