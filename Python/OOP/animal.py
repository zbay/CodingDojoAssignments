class Animal(object):

    def __init__(self, name, health):
        self.name = name
        self.health = health
    
    def walk(self):
        self.health -= 1
        return self
    
    def run(self):
        self.health -= 5
        return self

    def display_health(self):
        print str(self.health)
        return self

animal = Animal("Harambe", 420)
animal.walk().walk().walk().run().run().display_health()

class Dog(Animal):
    def __init__(self, name):
        super(Dog, self).__init__(self, name)
        self.health = 150
    def pet(self):
        self.health += 5
        return self
dog = Dog("Candle")
dog.walk().walk().walk().run().run().pet().display_health()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon, self).__init__(self, name)
        self.health = 170
    def fly(self):
        self.health -= 10
        return self
    def display_health(self):
        super(Dragon, self).display_health()
        print "I am a dragon!"
        return self
dragon = Dragon("Drogon")
dragon.fly().display_health()

#dog.fly()
#animal.fly()
#animal.pet()
animal.display_health()