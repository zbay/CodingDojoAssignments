# come back and sort this
class Call(object):
    def __init__(self, id, caller, caller_num, time, reason):
        self.id = id
        self.caller = caller
        self.caller_num = caller_num
        self.time = time
        self.reason = reason
    
    def display(self):
        print "Call ID: " + str(self.id)
        print "Caller: " + str(self.caller)
        print "Caller Phone #: " + str(self.caller_num)
        print "Time: " + str(self.time)
        print "Reason: " + str(self.reason)
        return self

class CallCenter(object): # add to end, remove from front
    def __init__(self, calls, queue_size):
        self.queue_size = queue_size
        self.calls = calls[:queue_size] # cut calls down to size
    
    def add(self, call):
        if self.queue_size > len(self.calls):
            self.calls.append(call)
        return self

    def remove(self):
        if len(self.calls) > 1:
            self.calls = self.calls[1:]
        else:
            self.calls = []
        return self

    def info(self):
        for i in range(0, len(self.calls), 1):
            print self.calls[i].caller
            print self.calls[i].caller_num
        print "Queue size: " + str(self.queue_size)
        return self

    def remove_by_num(self, num):
        for i in range(0, len(self.calls), 1):
            if self.calls[i].caller_num == num:
                if i+1 < len(self.calls):
                    self.calls = self.calls[:i] + self.calls[i+1:]
                    return self
                else:
                    self.calls = self.calls[:i]
        return self
    
    #def sort(self):


call1 = Call(1, "Zach", "911", "4:20 PM", "YOLO")
call2 = Call(2, "Jack", "12345911", "3:20 PM", "idk")
call3 = Call(3, "Mack", "0938372", "5:20 PM", "Yes")
call4 = Call(4, "Dak", "7654432", "6:20 PM", "What?")
call1.display()

cc = CallCenter([call1, call2, call3, call4], 3)
cc.info()
print "Attempting to add --- "
cc.add(Call(5, "Iraq", "11111", "7:20 PM", "none")).info()
print "Removing --- "
cc.remove().info()
print "Adding for real --- "
cc.add(Call(5, "Iraq", "11111", "7:20 PM", "none")).info()
print "Removing by number: "
cc.remove_by_num("0938372").info()


"""
from datetime import datetime

class Call(object):
    NUM_CALLS = 0
    def __init__(self, caller, phone_num, reason):
        self.caller = caller
        self.phone_num = phone_num
        self.time_of_call = datetime.now()
        self.reason = reason
        self.id = Call.NUM_CALLS
        
        Call.NUM_CALLS += 1
    
    def display_info(self):
        print "\n" + ("#" * 20)
        for attr, val in self.__dict__.iteritems():
            if attr == "time_of_call":
                print "{}: {}".format(attr, val.strftime("%I:%M:%S"))
            else:
                print "{}: {}".format(attr, val)
        print "#" * 20

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queue_size = self.get_queue_size()

    def get_queue_size(self):
        return len(self.calls)

    def add(self, a_call):
        self.calls.append(new_call)

    def remove(self, r_call):
        self.calls.remove(r_call)

    def info(self):
        for call in self.calls:
            call.display_info()


'''
You can run this file to interactively add calls
'''


def handle_call():
    print "Would You like to make a call?"
    print "type [1] for yes and [0] for no"
    ans = raw_input()
    return int(ans)

def take_call():
    print "What is your name?"
    name = raw_input()
    print "What is your reason for calling?"
    reason = raw_input()
    print "Please confirm your phone number"
    num = raw_input()
    print "Please stay on the line while we proccess your call"
    return Call(name, num, reason)

game_on = True
center = CallCenter()
while game_on:
    ring = handle_call()
    if ring == 1:
        center.calls.append(take_call())
        print "All calls today:"
        center.info()
    else:
        game_on = False
"""