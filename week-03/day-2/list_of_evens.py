numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def evenlist(list):
    evens=[]
    i= 0
    while i<=len(list)-1:
        if (list[i]) % 2 == 0:
            evens.append(list[i])
        i+=1
    return evens
print (evenlist(numbers))
