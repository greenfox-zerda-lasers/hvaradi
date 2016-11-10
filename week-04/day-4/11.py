from tkinter import *
from random import randint, choice

root = Tk()
canvas = Canvas(root, width=600, height=600, bg="yellow")
canvas.pack()

x=600
y=0
canvas.create_rectangle(y, y, x, x)
canvas.create_line(x/3, y, x/3, x)
canvas.create_line(x*2/3, y, x*2/3, x)
canvas.create_line(y, x/3, x, x/3)
canvas.create_line(y, x*2/3, x, x*2/3)

# def fractal(y)




root.mainloop()
