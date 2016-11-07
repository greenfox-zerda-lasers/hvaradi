# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    file=open('texts/duplicated_chars.txt', 'r')
    lines=file.readlines()
    file.close()
    output=""
    for line in lines:
        for i in range(len(line)):
            if i % 2 == 0:
                output += line[i]
    return output
print(decrypt('texts/duplicated_chars.txt'))
