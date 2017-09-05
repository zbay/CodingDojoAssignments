def odd_even():
    for i in range(1, 2001, 1):
        kind = "odd"
        if i % 2 == 0:
            kind = "even"
        print "Number is " + str(i) + ". This is an " + kind + " number."
odd_even()

def multiply(arr, multiplier):
    for i in range(0, len(arr), 1):
        arr[i] *= multiplier
    return arr
a = [2,4,10,16]
print(multiply(a, 5))

def layered_multiples(arr):
    new_array = []
    for i in range(0, len(arr), 1):
        new_array.append([1] * arr[i])
    return new_array
print(layered_multiples(multiply([2,4,5], 3)))