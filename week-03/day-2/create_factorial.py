# create a function that returns it's input factorial

def factorial(number):
    a=1 #növekvő számsor
    result=1 #szorzattal megnövelt számsor
    while a <= number:
        result = result * a
        a += 1
    return result
print(factorial(5))
