# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    if a > b and a > c:
        return a
    if b > a and b > c:
        return b
    if c > a and c > b:
        return c

# Returns the median value of a list given as param
def median(pool):
    pool.sort()
    if len(pool) % 2 == 0:
        a = int(len(pool)/2-1)
        b = int(len(pool)/2)
        return (pool[a ] + pool[b])/2
    else:
        return pool[int((len(pool) - 1) / 2)]

# Returns true if the param is a vowel
def is_vovel(char):
    if 1 != len(char):
        raise ValueError
    if str != type(char):
        raise TypeError
    return char.lower() in 'aeiouéáőűöüóí'

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = hungarian
    for char in teve:
        if is_vovel(char):
            teve = (char+'v'+char).join(teve.split(char))
    return teve
