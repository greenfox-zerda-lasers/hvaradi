# Create a `Circle` class that takes it's radius as cinstructor parameter
# It should have a `get_circumference` method that returns it's circumference
# It should have a `get_area` method that returns it's area

class Circle():
  radius = 0

  def __init__(self, radius, pi):
    self.radius = radius
    self.pi = 3.14

  def get_circumference(self):
    return self.radius * 2 * self.pi

  def get_area(self):
    return self.pi * self.radius ** 2

HelgaCircle = Circle(100, 3.14)
print("The circumference of the circle:",(HelgaCircle.get_circumference()))
print("The area of the circle:",(HelgaCircle.get_area()))
