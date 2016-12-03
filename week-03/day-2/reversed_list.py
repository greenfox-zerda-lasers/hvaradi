numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list

def reverselist(list):
    reversed=[]
    i= len(list)-1
    while i>=0:
        reversed.append(list[i])
        i-=1
    return reversed
print (reverselist(numbers))
