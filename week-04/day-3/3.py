# create a 300x300 canvas.
# draw its diagonals in green.

from tkinter import *

root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()

box=canvas.create_rectangle(100, 100, 200, 200)
green_line=canvas.create_line(100, 100, 200, 200, fill="green")

root.mainloop()
