# Create an elevator controller class
# It should take an user input by listening to user input
# List of commands:
#
#  - Move elevator up
#  - Move elevator down
#  - Add people
#  - Remove people
#
#  Features to implement:
#   - Always draw the state of the elevator as depicted in "art.txt"
#   - [ x ] is the elevator. X means it has at least 1 person inside
#   - Moving floors should take time
#   - don't move beyond limits
#
# Create the class with MVC pattern in mind. It should get and store data in the model object
# and it should pass the data to the view objects

from elevator_model import Elevator
from elevator_view import View
import os

class Elevator_controller:

    def __init__(self):
        self.model = Elevator()
        self.view = View()
        self.view.draw(self.model.max_level, self.model.position, self.model.people)
        self.handle_input()

    def move_up(self):
        try:
            self.model.move_up()
        except ValueError:
            print("It's the top floor, you only could go down, Sir!")

    def move_down(self):
        try:
            self.model.move_down()
        except ValueError:
            print("It's ground floor, you only could go up, Sir!")

    def add_people(self):
        try:
            self.model.add_people()
        except ValueError:
            print("There's no place for one more people, Sir!")

    def remove_people(self):
        try:
            self.model.remove_people()
        except ValueError:
            print("The elevator will be empty. Is it OK for you?")

    def handle_input(self):
        command = 0
        while command != "q":
            os.system('cls' if os.name == 'nt' else 'clear')
            command = input("Up or down, sir? (Up = 1 ; Down = 0)")
            if command == "1":
                self.move_up()
            if command == "0":
                self.move_down()
            if command == "a":
                self.add_people()
            if command == "b":
                self.remove_people()
            self.view.draw(self.model.max_level, self.model.position, self.model.people)

controller = Elevator_controller()
