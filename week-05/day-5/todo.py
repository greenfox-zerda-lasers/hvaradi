# from functions import *
import sys


def menu ():
    print('+ '*32)
    print('+ '*8 + "       To Do Application        " + '+ '*8)
    print('+ '*32)
    print('               _________________________________')
    print('              |      Command line arguments:    |')
    print('              |                                 |')
    print('              |    -l   Lists all the tasks     |')
    print('              |    -a   Adds a new task         |')
    print('              |    -r   Removes a task          |')
    print('              |    -c   Completes a task        |')
    print('              |_________________________________|')


# menu()
print(sys.argv)

if len(sys.argv) == 1:
    menu()

if len(sys.argv) == 2:
    if sys.argv[1] == '-l':
        file=open('todo.txt', 'r')
        lines=file.readlines()
        file.close()
        for i in range(len(lines)):
            print(i+1, " - ", lines[i].rstrip())

if len(sys.argv) == 3:
    if sys.argv[1] == '-a':
        file=open('todo.txt', 'a')
        file.write(sys.argv[2])
        file.close()

    if sys.argv[1] == '-r':
        file=open('todo.txt', 'r')
        lines=file.readlines()
        file.close()
        del lines[int(sys.argv[2])-1]
        file=open('todo.txt', 'w')
        file.writelines(lines)


    # if sys.argv[-1] == '-c':
    #     ************
