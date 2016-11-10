# create a 300x300 canvas.
# draw a green 10x10 square to its center.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

box=canvas.create_rectangle(155, 155, 165, 165, fill = "green")

root.mainloop()
