# create a pirate class
# it should have 2 methods
# drink_rum()
# hows_goin_mate()
# if the drink_rum was called at least 5 times:
# hows_goin_mate should return "Arrrr!"
# "Nothin'" otherwise

class Pirate():

    def __init__(self):
        self.drink = 0

    def drink_rum(self, drink):
        self.drink = self.drink + drink

    def hows_goin_mate(self):
        if self.drink >= 5:
            print("Arrrr!")
        else:
            print("Nothin'")

wtf = Pirate()
print(wtf.drink)
wtf.drink_rum(3)
print(wtf.drink)
wtf.hows_goin_mate()
wtf.drink_rum(3)
print(wtf.drink)
wtf.hows_goin_mate()
