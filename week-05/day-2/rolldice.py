from random import randint

class Dice():

    def play(self):
        name = input("What's your name? ")
        print("Nice to meet you " + name + "!")
        print("Your number is: ",dice.rolling())
        answer = input("Do you want to continue this fantastic game? (If so, press Enter.)")
        while answer != "no":
            print("Great.. your number is: ", dice.rolling())
            answer = input("Do you want to continue this fantastic game?")

    def rolling(self):
        return randint(1,6)

dice = Dice()
dice.play()
