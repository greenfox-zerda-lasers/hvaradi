from tkinter import *
root = Tk()
canvas = Canvas(root, width=300, height=300)
canvas.pack()

b=0
while b<200:
    a=10
    box=canvas.create_rectangle(b, b, a+b, a+b, fill = "purple")
    b+=10

root.mainloop()
