from tkinter import *
from random import randint, choice
root = Tk()
canvas = Canvas(root, width=600, height=600)
canvas.pack()

def gen_hex_colour_code():
    return '#'+''.join([choice('0123456789ABCDEF') for i in range(6)])
def ring_size(x):
    a = randint(0, 600)
    b = randint(0, 600)
    c = gen_hex_colour_code()
    canvas.create_oval(a, b, a+x, b+x, fill=c)

i=0
while i<1200:
    ring_size(40)
    i+=1
root.mainloop()
