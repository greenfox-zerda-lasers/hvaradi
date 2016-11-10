# 9. Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".

def stars(word):
    if word == "":
        return word
    else:
        return word[0] + "*"+ stars(word[1:])

print(stars("bibibi"))
