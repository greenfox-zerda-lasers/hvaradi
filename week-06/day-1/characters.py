from tkinter import *
from PIL import Image, ImageTk

class Hero:
    def __init__(self):
        self.x=0
        self.y=0
    def move_hero(self, x, y):
        self.x = self.x + x
        self.y = self.y + y

class Enemy:
    def __init__(self):
        self.x=0
        self.y=0
    def move_skeleton(self, x, y):
        self.x = self.x + x
        self.y = self.y + y
    def move_boss(self, x, y):
        self.x = self.x + x
        self.y = self.y + y
