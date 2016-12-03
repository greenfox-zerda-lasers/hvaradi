# import math
# print(math.pi)

# list = ["Brad", "Dayley", "Python Phrasebook", 2006]
#
# letter = """
# Dear Mr. %s, \n
# Thank you for your %s book submission.
# You should be hearing from us in %d."""
#
# display = """
# Title: %s
# Author: %s, %s
# Date: %d"""
#
# record = "%s|%s|%s|%08d"

# print(letter%(list[1], list[2]), list[3])
# print(display%(list[1], list[2]), list[3])


word = "Python"
list = []
for i in word:
    list.append(i)
print(list)

string = ""
for j in range(len(word)):
    string += list[j]
    55
print(string)

dict = {}
for j, i in enumerate(string):
    dict[j] = i
print(dict)

for k in dict:
    print(k, '=', dict[k])
else:
    print("mano")

import os
os.path.abspath(".")
