import unittest
from Underscore import Underscore
class UnderscoreTest(unittest.TestCase):
    def setUp(self):
        # create an instance of the Underscore module we created
        self._ = Underscore()
        # initialize a list to run our tests on
        self.test_list = [1,2,3,4,5]
        self.testMap = self._.map(self.test_list, lambda x: x * 2)
        self.testReduce = self._.reduce(self.test_list, lambda x, prev: x + prev, 0)
        self.testFind = self._.find(self.test_list, lambda x: x == 3)
        self.testFilter = self._.filter(self.test_list, lambda x: (x % 2) == 1)
        self.testReject = self._.reject(self.test_list, lambda x: (x % 2) == 1)
        '''print "TestMap: " + str(self.testMap)
        print "TestReduce: " + str(self.testReduce)
        print "TestFind: " + str(self.testFind)
        print "TestFilter: " + str(self.testFilter)
        print "TestReject: " + str(self.testReject)'''
    def testMap(self):
        return self.assertEqual([2, 4, 6, 8, 10], self.testMap)
    def testReduce(self):
        return self.assertEqual(15, self.testReduce)
    def testFind(self):
        return self.assertEqual(2, self.testFind)
    def testFilter(self):
        return self.assertEqual([1,3,5], self.testFilter)
    def testReject(self):
        return self.assertEqual([2, 4], self.testReject)
if __name__ == "__main__":
    unittest.main()