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
        print "Inventory of " + str(self.owner) + "'s store:"
        for i in range(0, len(self.products), 1):
            self.products[i].display_info()
        return self