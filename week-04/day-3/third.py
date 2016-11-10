from tkinter import *

root = Tk()

canvas = Canvas(root, width=400, height=200)
canvas.pack()

i=50
while i < 200:
    purple_box=canvas.create_rectangle(80, 80, i, i, fill='purple')
    i+=50



root.mainloop()
