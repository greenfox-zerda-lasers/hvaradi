# 1. write a recursive function
# that takes one parameter: n
# and counts down from n

def decrease(n):
    if n <= 0:
        return 0
    else:
        return n, decrease(n-1)

print(decrease(13))
