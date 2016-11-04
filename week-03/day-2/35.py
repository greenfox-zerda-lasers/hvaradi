# create a function that returns it's input factorial

def factor(kutyulu):
    a=1 #növekvő számsor
    result=1 #szorzattal megnövelt számsor
    while a <= kutyulu:
        result = result * a
        a += 1
    return result
print(factor(5))
