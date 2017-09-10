class Underscore(object):
    def __init__(self):
        pass

    def map(self, arr, func):
        newArr = []
        for i in range(len(arr)):
            newArr.append(func(arr[i]))
        return newArr

    def reduce(self, arr, func, reduced):
        for i in range(len(arr)):
            reduced = func(arr[i], reduced)
        return reduced

    def find(self, arr, func):
        for i in range(len(arr)):
            if func(arr[i]) == True:
                return i
        return None

    def filter(self, arr, func):
        newArr = []
        for i in range(len(arr)):
            if func(arr[i]) == True:
                newArr.append(arr[i])
        return newArr
    
    def reject(self, arr, func):
        newArr = []
        for i in range(len(arr)):
            if func(arr[i]) == False:
                newArr.append(arr[i])
        return newArr

'''      
# you just created a library with 5 methods!
# let's create an instance of our class
_ = Underscore() # yes we are setting our instance to a variable that is an underscore
evens = _.filter([1, 2, 3, 4, 5, 6], lambda x: x % 2 == 0)
# should return [2, 4, 6] after you finish implementing the code above
three = _.find([1, 2, 3, 4], lambda x: x == 3)
mapped = _.map([1, 2, 3, 4], lambda x: x * 2)
summed = _.reduce([1, 2, 3, 4], lambda x, prev: x + prev, 0)
print evens # [2, 4, 6]
print three # 3
print mapped # [2, 4, 6, 8]
print summed # 10 
'''