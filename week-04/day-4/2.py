# 2. write a recursive function
# that takes one parameter: n
# and adds numbers from 1 to n

def increase(n):
    if n <= 1:
        return 1
    else:
        return n + increase(n-1)

print(increase(6))
