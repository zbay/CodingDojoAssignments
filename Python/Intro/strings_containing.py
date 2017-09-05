def strings_containing(arr, char):
    containChar = []
    for i in range(len(arr)):
        if arr[i].find(char) > -1:
            containChar.append(arr[i])
    return containChar

# input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'
# output
new_list = ['hello','world']

print strings_containing(word_list, char)