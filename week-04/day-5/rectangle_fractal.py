from tkinter import *
root = Tk()
canvas = Canvas(root, width=600, height=600)
canvas.pack()

def box(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size)
    if size>10:
        box(x+20, y+20, size-40)

box(0,0,600)

root.mainloop()
