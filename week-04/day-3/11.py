# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

from tkinter import *
from random import randint, choice

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def gen_hex_colour_code():
    return '#'+''.join([choice('0123456789ABCDEF') for i in range(6)])

def box_size(x):
    a = randint(0, 300)
    b = randint(0, 300)
    c = gen_hex_colour_code()
    canvas.create_rectangle(a, b, a+x, b+x, fill=c)

i=0
while i<600:
    box_size(20)
    i+=1

root.mainloop()
