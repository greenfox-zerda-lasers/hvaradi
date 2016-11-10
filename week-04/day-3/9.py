# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box_size(x):
    fun_box=canvas.create_rectangle((300/2-x/2), (300/2-x/2), (300/2-x/2)+x, (300/2-x/2)+x)

box_size(100)
box_size(50)
box_size(200)

root.mainloop()
