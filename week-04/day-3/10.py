# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box_size(x):
    fun_size=canvas.create_rectangle((300/2-x/2), (300/2-x/2), (300/2-x/2)+x, (300/2-x/2)+x)

a=1
while a <=20:
    box_size(a**3)
    a+=1

root.mainloop()
