# 5. We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies
# recursively (without loops or multiplication).

def count_ears(bunnies):
    ears=2
    if bunnies <= 1:
        return ears
    else:
        return ears + count_ears(bunnies-1)

print(count_ears(60))
