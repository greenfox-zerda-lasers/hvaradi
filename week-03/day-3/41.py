students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 12}
]

# create a function that counts the students that
# has more than 4 candies

def candies(i):
    candyboy = 0
    for c in (i):
        if c['candies'] > 4:
            candyboy = candyboy + 1
    return candyboy
print ("Number of boys with lots of candies:",(candies(students)))
