class Car(object):
    def __init__(self, price, speed, fuel, milage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.milage = milage
        if price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
    
    def display_all(self):
        print "Price: " + str(self.price)
        print "Speed: " + str(self.speed)
        print "Fuel: " + self.fuel
        print "Milage: " + str(self.milage)
        print "Tax rate: " + str(self.tax)
        return self

car1 = Car(12345, 100, "Full", 10000)
car2 = Car(9000, 80, "Empty", 20000)
car3 = Car(40000, 150, "Not Full", 8000)
car4 = Car(60000, 180, "Full", 50000)
car5 = Car(4000, 75, "Empty", 100000)
car6 = Car(90000, 200, "Not Full", 25000)
car1.display_all()
car2.display_all()
car3.display_all()
car4.display_all()
car5.display_all()
car6.display_all()
