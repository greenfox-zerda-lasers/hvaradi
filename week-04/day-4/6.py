# 6. We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or
# multiplication).

def count_ears(bunnies):
    if bunnies <= 1:
        return 2        #utolsó visszatérési érték
    else:
        if bunnies % 2 == 0:
            ears = 3
            return ears + count_ears(bunnies-1)
        else:
            ears = 2
            return ears + count_ears(bunnies-1)

print(count_ears(3))
