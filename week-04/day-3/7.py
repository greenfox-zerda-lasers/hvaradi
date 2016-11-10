# create a 300x300 canvas.
# fill it with four different size and color rectangles.

from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

greenbox=canvas.create_rectangle(140, 140, 190, 190, fill = "green")
purplebox=canvas.create_rectangle(10, 10, 30, 30, fill = "purple")
redbox=canvas.create_rectangle(180, 180, 220, 220, fill = "red")
yellowbox=canvas.create_rectangle(150, 30, 180, 60, fill = "yellow")
bluebox=canvas.create_rectangle(30, 150, 90, 210, fill = "blue")
tomatobox=canvas.create_rectangle(200, 60, 230, 90, fill = "tomato")

root.mainloop()
