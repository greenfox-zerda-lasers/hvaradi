# 8. Given a string, compute recursively a new string where all the 'x' chars have been removed.

def delete_letters(word):
    if word == "":
        return word
    else:
        if word[0] == "i":
            return delete_letters(word[1:])
        else:
            return word[0] + delete_letters(word[1:])

print(delete_letters("bibibi"))
