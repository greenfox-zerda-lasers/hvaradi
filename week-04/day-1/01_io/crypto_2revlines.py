# Create a method that decrypts texts/reversed_zen_lines.txt
def decrypt(file_name):
    file=open('texts/reversed_zen_lines.txt', 'r')
    lines=file.readlines()
    file.close()
    output=""
    for line in lines:
        # line = line.rstrip()
        line = line[0:-1]
        output += line[::-1]
        output = output + "\n"
    return output
print(decrypt('texts/reversed_zen_lines.txt'))
