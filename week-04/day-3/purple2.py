from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

a=10
b=20
while a<600:
    box=canvas.create_rectangle(a, a, b, b, fill = "purple")
    b=a
    a*=2

root.mainloop()
