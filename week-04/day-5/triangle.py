from tkinter import *
import time

root = Tk()
canvas = Canvas(root,width=600, height=600)
canvas.pack()

ratio=(3**0.5/2)

def tri(x,y,size):
    time.sleep(0.001)
    canvas.create_polygon(x,y,x+size,y,size/2+x,ratio*size+y,
                            outline="medium turquoise", fill="")
    if size > 6:
        tri(x,y,size/2)
        tri(x+size/2,y,size/2)
        tri(x+size/4,y+ratio*size/2, size/2)
    canvas.update()

tri(10,10,500)

root.mainloop()
