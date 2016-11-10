# create a 300x300 canvas.
# draw a box that has different colored lines on each edge.

from tkinter import *

root = Tk()

canvas = Canvas(root, width=300, height=300)
canvas.pack()

box=canvas.create_rectangle(100, 100, 200, 200)
red_line=canvas.create_line(100, 100, 200, 100, fill="red", width=2)
green_line=canvas.create_line(100, 200, 100, 100, fill="green", width=2)
blue_line=canvas.create_line(200, 200, 200, 100, fill="blue", width=2)
yellow_line=canvas.create_line(200, 200, 100, 200, fill="yellow", width=2)

root.mainloop()
