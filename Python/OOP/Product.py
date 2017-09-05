class Store(object):

    def __init__(self, products, location, owner):
        self.products = products
        self.location = location
        self.owner = owner

    def add_product(self, product):
        self.products.append(product)
        return self
    
    def remove_product(self, product_name): # assumes you only want to remove one
        for i in range(0, len(self.products), 1):
            if self.products[i].name == product_name:
                self.products = self.products[0:i] + self.products[i+1:]
                return self
        return self

    def inventory(self):
        print "Inventor of " + str(self.owner) + "'s store:"
        for i in range(0, len(self.products), 1):
            self.products[i].display_info()
        return self

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

products = [Product(12, "book", "penguin", 3), Product(50, "shoes", "nike", 20), Product(2, "soda", "pepsi", 0.2), Product(12000, "car", "kia", 7000)]
store = Store(products, "McLean, VA", "Zee Dubs")
store.inventory()
store.add_product(Product(1000, "computer", "lenovo", 400))
store.inventory()
store.remove_product("soda")
store.inventory()