class Product(object):

    def __init__(self, price, name, brand, cost, status="for sale"):
        self.price = price
        self.name = name
        self.brand = brand
        self.cost = cost
        self.status = status
    
    def sell(self):
        self.status = "sold"
        return self

    def add_tax(self, rate):
        return self.price * (1+rate)

    def return_item(self, reason):
        if reason == "defective":
            self.status = "defective"
            self.price = 0
        elif reason == "unopened":
            self.status = "for sale"
        else:
            self.status = "used"
            self.price *= 0.8
        return self

    def display_info(self):
        print "Price: " + str(self.price)
        print "Name: " + str(self.name)
        print "Brand: " + str(self.brand)
        print "Price: " + str(self.cost)
        print "Status: " + str(self.status)
        return self

    def __repr__(self): # for prettier printing of an object
        return "<Product object {}, price {}, name {}, brand {}, price {}, status {}>".format(self.name, self.brand, self.price, self.cost, self.status)