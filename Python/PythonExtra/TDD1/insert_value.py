def insert_val_at(index, my_list, value):
    if len(my_list) <= index:
        return False
    my_list.append(0)
    for i in range(len(my_list)-1, index, -1):
        my_list[i] = my_list[i-1]
    my_list[index] = value
    return my_list