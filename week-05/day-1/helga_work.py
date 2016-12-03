#Write a function, that takes two strings and returns a boolean value based on
#if the two strings are Anagramms or not.

from collections import Counter

word1="hu la"
word2="hoop"

def anagramm(word1, word2):
    letters1=[]
    letters2=[]
    for i in range(len(word1)):
        letters1.append(word1.lower()[i])
    letters1.sort()

    for i in range(len(word2)):
        letters2.append(word2.lower()[i])
    letters2.sort()

    if " " in letters1:
        letters1.remove(" ")
    if " " in letters2:
        letters2.remove(" ")

    if letters1 == letters2:
        return True
    else:
        return False
anagramm(word1, word2)


def count_letters(string):
    result = list(string.lower())
    if " " in result:
        result.remove(" ")
    result = Counter(result)
    return result
print(count_letters("babbala"))
