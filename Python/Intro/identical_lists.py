def are_identical(list1, list2):
    if len(list1) != len(list2):
        return False
    for i in range(len(list1)):
        if list1[i] != list2[i]:
            return False
    return True

list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
print are_identical(list_one, list_two)

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
print are_identical(list_one, list_two)

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
print are_identical(list_one, list_two)

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
print are_identical(list_one, list_two)