# import the python testing framework
import unittest
# our "unit"
# this is what we are running our test on
def isEven(n):
    return n % 2 == 0
# our "unit tests"
# initialized by creating a class that inherits from unittest.TestCase
class IsEvenTests(unittest.TestCase):
    # each method in this class is a test to be run
    def testTwo(self):
        self.failUnless(isEven(2))
    def testThree(self):
        self.failIf(isEven(3))
if __name__ == '__main__':
    unittest.main() # this runs our tests


# check unittest documentation for other assertions