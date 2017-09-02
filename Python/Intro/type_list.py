def type_list(arr):
    #print type(arr[0])
    printType = type(arr[0]).__name__
    sameType = True
    string = ""
    sum = "No sum yet!"
    for i in range(0, len(arr)):
        if printType != type(arr[i]).__name__:
            printType = "mixed"
        if type(arr[i]) is str:
            string += " " + arr[i]
        if type(arr[i]) is int or type(arr[i]) is float:
            if(sum == "No sum yet!"):
                sum = arr[i]
            else:
                sum += arr[i]
    print "The list you entered is of {} type".format(printType)
    if len(string) > 0:
        print "String: {}".format(string)
    if sum != "No sum yet!":
        print "Sum: {}".format(sum)

list1 = ['magical unicorns',19,'hello',98.98,'world']
list2 = [2,3,1,7,4,12]
list3 = ['magical','unicorns']
type_list(list1)
type_list(list2)
type_list(list3)