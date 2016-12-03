names = ['Zakarias', 'ul', 'Hans', 'Otto', 'Ole']
# create a function that returns the shortest string
# from a list

def minimum(list):
    mini = list[0]
    for i in list:
        if len(i) < len(mini):
            mini=i
    return mini
print (minimum(names))
