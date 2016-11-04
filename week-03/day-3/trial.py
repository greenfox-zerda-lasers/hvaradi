# rectangle1 = {"a": 40, "b": 50}
# rectangle2 = {"a": 20, "b": 30}
#
# def get_circumference(rect):
#   return rect["a"] * 2 + rect["b"] * 2
#
# print(get_circumference(rectangle1))
# print(get_circumference(rectangle2))


# class Rectangle():
#   a = 0
#   b = 0
#
#   def __init__(self, a, b):
#     self.a = a
#     self.b = b
#
#   def get_circumference(self):
#     return self.a * 2 + self.b * 2
#
# rect1 = Rectangle(40, 50)
# rect2 = Rectangle(20, 30)
# print(rect1.get_circumference())
# print(rect2.get_circumference())


class Rectangle():
  a = 0
  b = 0

  def __init__(self, a, b):
    self.a = a
    self.b = b

  def get_circumference(self):
    return self.a * 2 + self.b * 2

myrect = Rectangle(100, 144)
print(myrect.get_circumference())
