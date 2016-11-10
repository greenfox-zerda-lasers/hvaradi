# Create a method that returns the five most frequent lottery number in a pretty table format
import csv

def five_most_frequent():
    f=open('otos.csv', 'r')
    lines=csv.reader(f, delimiter=";")
print(lines)

#     file.close()
#     output=[]
#     for line in lines:
#         output += [-6:-1]
#
#     return output
# print(five_most_frequent('otos.csv'))
