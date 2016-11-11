# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def change_letters(word):
    print(word)
    if word == "":
        return word
    else:
        if word[0] == "i":
            return "u" + change_letters(word[1:])
        else:
            return word[0] + change_letters(word[1:])

print(change_letters("bibibi"))
