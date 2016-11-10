# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def line_draw(x,y):
    fun_line=canvas.create_line(x, y, 50+x, 50+y, fill="purple")
    return fun_line

print(line_draw(10, 10))
print(line_draw(60, 180))
print(line_draw(90, 20))

root.mainloop()
