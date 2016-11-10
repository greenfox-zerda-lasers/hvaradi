# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

def box_draw(x,y):
    fun_box=canvas.create_rectangle(x, y, 50+x, 50+y, fill="purple")

print(box_draw(10, 10))
print(box_draw(60, 180))
print(box_draw(90, 20))

root.mainloop()
