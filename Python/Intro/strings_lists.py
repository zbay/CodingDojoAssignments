# exercise 1: find and replace
words = "It's thanksgiving day. It's my birthday,too!"
print words.find("day")
words2 = words.replace("day", "week")
print words2

# exercise 2: min and max
def min_max(arr):
    print min(arr)
    print max(arr)

x = [2,54,-2,7,12,98]
min_max(x)

# exercise 3: first and last
x = ["hello",2,54,-2,7,12,98,"world"]
print x[0]
print x[len(x)-1]
def first_last(arr):
    return [arr[0], arr[len(arr)-1]]
print first_last(x)

# exercise 4: new list
x = [19,2,54,-2,7,12,98,32,10,-3,6]
def new_weird_list(arr):
    new_arr = sorted(arr)
    first_half = new_arr[:len(x)/2]
    second_half = new_arr[(len(x)/2):]
    new_arr = [first_half] + second_half
    print new_arr
new_weird_list(x)