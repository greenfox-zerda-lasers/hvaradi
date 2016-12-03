numbers = [-101, 5, 8, -1, 2, 89, -806]
# Write a function that returns the minimal element
# in a list (your own min function)

def minimum(list):
    mini = list[0]
    for i in range(len(list)):
        if list[i] < mini:
            mini=list[i]
    return mini
print (minimum(numbers))


# def min(list):
#     minimum_in_list=[]
#     x=list[0]
#     for i in range(len(list)):
#         if list[i] < x:
#             minimum_in_list.append(list[i])
#     return minimum_in_list
#
# print(min(numbers))
