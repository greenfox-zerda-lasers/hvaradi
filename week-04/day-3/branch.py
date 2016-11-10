from tkinter import *

root = Tk()
canvas = Canvas(root,width=500, height=500)
canvas.pack()


def branch(height):
    height *= 0.64
    if height > 7:
        rotate(theta)
        stroke('blue')
        line(0,0,0, -height)
        translate(0, -height)
        branch (height)
        rotate(-theta)
        stroke('orange')
        line(0,0,0, -height)
        translate(0, -height)
        branch (height)

branch(30)


root.mainloop()
