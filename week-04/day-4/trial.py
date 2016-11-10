# def factorial(number):
#     product=1
#     for i in range(number):
#         product=product * (i+1)
#     return product
#
# print(factorial(3))

def factorial(number):
    if number <= 1:
        return 1
    else:
        return number * factorial(number-1)

print(factorial(3))


# product = 1
# for i in range (number):
#     product = product * (i+1)
#
# print(product)
