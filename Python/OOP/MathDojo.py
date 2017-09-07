class MathDojo(object):

    def __init__(self, start=0):
        self.result = 0
        if isinstance(start, int) or isinstance(start, float):
            self.result = start
        if isinstance(start, list) or isinstance(start, tuple):
            for val in start:
                self.result += val

    def add(self, *args):
        for val in args:
            if isinstance(val, int) or isinstance(val, float):
                self.result += val 
            if isinstance(val, list) or isinstance(val, tuple):
                for v in val:
                    self.result += v
        return self

    def subtract(self, *args):
        for val in args:
            if isinstance(val, int) or isinstance(val, float):
                self.result -= val 
            if isinstance(val, list) or isinstance(val, tuple):
                for v in val:
                    self.result -= v
        return self

md = MathDojo(0)
print md.result # 0
print md.add(2).add(2,5).subtract(3,2).result # 4
print md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result # 4 + 28.15 = 32.15