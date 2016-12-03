from view import Visual
# from map import Map
from characters import Hero
import map

class GamePlay:

    def __init__(self):
        self.view = Visual()
        self.map = map.game_map
        self.hero = Hero()
        self.view.screen(self.map)
        self.view.draw_hero(self.hero.x, self.hero.y)
        self.view.draw_boss(4, 0)
        self.view.draw_skeleton(9, 0)
        self.view.draw_skeleton(9, 9)
        self.view.draw_skeleton(4, 6)
        self.view.canvas.bind('<Up>', self.move_up)
        self.view.canvas.bind('<Down>', self.move_down)
        self.view.canvas.bind('<Left>', self.move_left)
        self.view.canvas.bind('<Right>', self.move_right)

    def start(self):
        self.view.appear()

    def move_up(self, event):
        if self.hero.y-1<=11 and self.hero.y-1>=0:
            if self.map[self.hero.y-1][self.hero.x] == 0:
                self.hero.move_hero(0,-1)
                self.view.draw_hero(self.hero.x, self.hero.y, 'up')

    def move_down(self, event):
        if self.hero.y+1<=11 and self.hero.y+1>=0:
            if self.map[self.hero.y+1][self.hero.x] == 0:
                self.hero.move_hero(0,1)
                self.view.draw_hero(self.hero.x, self.hero.y, 'down')

    def move_left(self, event):
        if self.hero.x-1<=11 and self.hero.x-1>=0:
            if self.map[self.hero.y][self.hero.x-1] == 0:
                self.hero.move_hero(-1,0)
                self.view.draw_hero(self.hero.x, self.hero.y, 'left')

    def move_right(self, event):
        if self.hero.x+1<=11 and self.hero.x+1>=0:
            if self.map[self.hero.y][self.hero.x+1] == 0:
                self.hero.move_hero(1,0)
                self.view.draw_hero(self.hero.x, self.hero.y, 'right')

game = GamePlay()
game.start()
