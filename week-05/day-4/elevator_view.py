# Create a class the displays the Elevator art and navigation (list of commands)


class View:
    def draw(self, level, position, people):
        print("___________________________________")
        print("`._______________________________.'")
        for i in range(level, -1, -1):
            if position != i:
                print("   || ||       || ||       || ||")
            else:
                print("  _||_||_[_{}_]_||_||_______||_||_".format(people))
        if position != 0:
            print("  _||_||_______||_||_______||_||_")
        print(".'_______________________________`.")

# view = View()
# view.draw(12, 0, 5)
