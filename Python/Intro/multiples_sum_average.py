# multiples part 1: print odds from 1 to 1000
def printOdds():
    for i in range(1,999,2):
        print i
#printOdds()

# multiples part 2: all multiples of 5 from 5 to 1000000
def printFives():
    for i in range(5, 1000000, 5):
        print i
#printFives()

# sum of all values
def sum(arr):
    total = arr[0]
    for i in range(1, len(arr)):
        total += arr[i]
    return total
print(sum([1,2,5,10,255,3]))

# average of all values
def avg(arr):
    return sum(arr) / len(arr)
print(avg([1,2,5,10,255,3]))