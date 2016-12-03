from tkinter import *
from PIL import Image, ImageTk
import map

class Visual:
    def __init__(self):
        self.root = Tk()
        self.canvas = Canvas(self.root, width=750, height=605)
        self.canvas.focus_set()
        self.floor = self.resize("tools/floor.png",55,55)
        self.wall = self.resize("tools/wall.png",55,55)
        self.hero_down = self.resize("tools/hero_down.png",55,55)
        self.hero_up = self.resize("tools/hero_up.png",55,55)
        self.hero_left = self.resize("tools/hero_left.png",55,55)
        self.hero_right = self.resize("tools/hero_right.png",55,55)
        self.boss = self.resize("tools/boss.png",55,55)
        self.skeleton = self.resize("tools/skeleton.png",55,55)
        self.canvas.pack()

    def resize(self, img_path, width, height):
        image = Image.open(img_path)
        resized_image = image.resize((width, height), Image.ANTIALIAS)
        return ImageTk.PhotoImage(resized_image)

    def screen(self, game_map):
        for row in range(len(game_map)):
            for cell in range(len(game_map[row])):
                if game_map[row][cell] == 0:
                    self.canvas.create_image(row*55,cell*55, image = self.floor, anchor=NW)
                else:
                    self.canvas.create_image(row*55,cell*55, image = self.wall, anchor=NW)

    def appear(self):
        self.root.mainloop()

    def draw_hero(self, x, y, direction='down'):
        self.canvas.delete("hero")
        if direction == 'up':
            hero_face = self.hero_up
        elif direction == 'left':
            hero_face = self.hero_left
        elif direction == 'right':
            hero_face = self.hero_right
        elif direction == 'down':
            hero_face = self.hero_down
        self.canvas.create_image(x*55, y*55, image = hero_face, anchor=NW, tag="hero")

    def draw_boss(self, x, y):
        self.canvas.create_image(x*55, y*55, image = self.boss, anchor=NW)

    def draw_skeleton(self, x, y):
        self.canvas.create_image(x*55, y*55, image = self.skeleton, anchor=NW)
