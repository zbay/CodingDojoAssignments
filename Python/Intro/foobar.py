def foobar():
    for i in range(100, 100001, 1):
        if isPrime(i):
            print str(i) + ": Foo"
        elif isSquare(i):
            print str(i) + ": Bar"
        else:
            print str(i) + ": FooBar"

def isPrime(num):
    if num < 2:
        return False
    if num % 2 == 0:
        return False
    else:
        for i in range(2, num/2, 1):
            if num % i == 0:
                return False
    return True

def isSquare(num):
    if num == 0 or num == 1:
        return True
    for i in range(2, num/2, 1):
        if i*i == num:
            return True
    return False

foobar()