# create a 300x300 canvas.
# fill it with a checkerboard pattern.

from tkinter import *
from random import randint, choice

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

a=0
b=a+37.5
c=37.5
d=c+37.5
while a <=300:
    box=canvas.create_rectangle(a, b, c, d)
    a+=37.5

root.mainloop()
