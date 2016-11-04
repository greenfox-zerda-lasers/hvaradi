numbers = [-101, 5, 8, -1, 2, 89, -806]
# Write a function that returns the minimal element
# in a list (your own min function)

# def min(list):
#     list.sort()
#     i=list[0]
#     return i
# print (min(numbers))

def minimum(list):
    mini = list[0]
    for i in range(len(list)):
        if list[i] < mini:
            mini=list[i]
    return mini
print (minimum(numbers))



# def min(list):
#     i=0
#     j=i+1
#     while i!=(len(list)):
#         if a<=list[j]:
#             a=list[i]
#             # min_element.append(list[i])
#         else:
#             a=list[j]
#             # min_element.append(list[j])
#         i+=1
#     return a
# print(min(numbers))
