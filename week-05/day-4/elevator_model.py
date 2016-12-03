# Create an "elevator" class
# The class should track the following things:
#  - elevator position
#  - people in the elevator
#  - add people
#  - remove people
#
# Please remeber that negative amount of people would be troubling

class Elevator():

    def __init__(self):
        self.position = 0
        self.people = 0
        self.max_level = 12
        self.max_people = 10
        self.min_people = 0

    def add_people(self, num=1):
        if self.people + num <= self.max_people:
            self.people += num
        else:
            raise ValueError


    def remove_people(self, num=1):
        if self.people - num > self.min_people:
            self.people -= num
        else:
            raise ValueError

    def move_up(self):
        if self.position + 1 <= self.max_level:
            self.position += 1
        else:
            raise ValueError

    def move_down(self):
        min = 0
        if self.position -1 >= min:
            self.position -= 1
        else:
            raise ValueError
