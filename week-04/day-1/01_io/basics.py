# 1. Create a method that reads all contents of a file when its name given as param
def readfile(file_name):
    f = open(file_name)
    result = f.read()
    f.close()
    return result

print(readfile('texts/zen_of_python.txt'))

# 2. Create a method that gets a file_name and a number as param and reads the numberth line of the file
def readline(file_name, number):
    f = open(file_name)
    result = f.readlines()[number-1].rstrip()
    return result

print(readline('texts/zen_of_python.txt', 2))

# 3. Create a method that gets a long sentence as param and gives back the contained words in a list
def words(sentence):
    # result = sentence[0:-1]
    result = sentence.rstrip()
    result = result.split()
    return result

print(words('Flat is better than nested.'))

# 4. Create a method that gets a list of words and creates a sentence with the words separated by spaces
def sentence(words):
    a =" "
    result = a.join(words) + "."
    return result

words = ["Explicit","is","better","than","implicit"]
print(sentence(words))


# 5. Create a method that gets a string and gives back the character codes in a list
def char_codes(string):
    result = [ord(i) for i in string]
    return result

print(char_codes('implementation'))


# 6. Create a method that gets a list of integers and gives back a string which characters are created from the numbers used as character codes
def string(char_codes):
    result = ""
    for i in range(len(char_codes)):
        result += (chr(char_codes[i]))
    return result
print(string([67, 114, 101, 97, 116, 101]))
