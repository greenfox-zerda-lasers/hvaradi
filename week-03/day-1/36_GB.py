ah = [3, 4, 5, 6, 7]
# print the sum of all numbers in ah

a=0  #helyiérték száma
b=0  #az előzővel megnövelt új érték
while a < len(ah):
    b = b + ah[a]
    a += 1
print (b)
