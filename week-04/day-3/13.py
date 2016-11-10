# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from tkinter import *
from random import randint, choice

root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def line_draw(x,y):
    canvas.create_line(x, y, 150, 150, fill="purple")

x=0
y=0
a=0
while a<=15:
    line_draw(x, y)
    x+=20
    y+=0
    a+=1

x=0
y=0
a=0
while a<=15:
    line_draw(x+300, y)
    x+=0
    y+=20
    a+=1

x=0
y=0
a=0
while a<=15:
    line_draw(x+300, y+300)
    x-=20
    y-=0
    a+=1

x=0
y=0
a=0
while a<=15:
    line_draw(x, y+300)
    x-=0
    y-=20
    a+=1

root.mainloop()
