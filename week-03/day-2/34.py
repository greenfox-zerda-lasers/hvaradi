kitties = [4, 5, 6, 7, 8, 9, 10]
# write your own sum function

def sumup(kutyulu):
    a=0  #helyiérték száma
    b=0  #az előzővel megnövelt új érték
    while a < len(kutyulu):
        b = b + kutyulu[a]
        a += 1
    return (b)

print(sumup(kitties))
