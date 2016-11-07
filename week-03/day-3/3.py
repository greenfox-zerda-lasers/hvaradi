# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

class Pirate():

    def __init__(self, name, age, hair):
        self.alcohol=0
        self.name=name
        self.age=age
        self.hair=hair

    def drink_rum(self, alcohol):
        self.alcohol = self.alcohol + alcohol

    def describe(self):
        print("His name is:", self.name, "Age is:", self.age, "Hair is like:", self.hair)

    def hows_goin_mate(self):
        if self.alcohol >= 5:
            print("Arrrr!")
        else:
            print("Nothing!")

joe=Pirate("Joe",46,"redhead")
print(joe.alcohol)
joe.hows_goin_mate()
joe.drink_rum(6)
joe.hows_goin_mate()
# print(joe.alcohol)
# joe.drink_rum(4)
# joe.describe()
