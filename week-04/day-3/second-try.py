from tkinter import *

root = Tk()

canvas = Canvas(root, width=600, height=400)
canvas.pack()

# blackline=canvas.create_line(0, 0, 200, 50)
# redline=canvas.create_line(0, 100, 200, 50, fill='red')

i=10
while i < 200:
    greenbox=canvas.create_rectangle(10, 10, i, i, fill='green')
    i+=20


# canvas.delete(redline)
# canvas.delete(ALL)

root.mainloop()
