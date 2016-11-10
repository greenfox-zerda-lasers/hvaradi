# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def line_draw(a, b):
    fun_line=canvas.create_line(a, b, 150, 150, fill="green")
    return fun_line

print(line_draw(10, 10))

root.mainloop()
