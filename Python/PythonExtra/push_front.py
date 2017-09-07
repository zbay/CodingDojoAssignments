def push_front(arr, val):
    arr.append(0)
    for i in range(len(arr)-1, 0, -1):
        arr[i] = arr[i-1]
    arr[0] = val
    return arr

arr = [1, 2, 3]
print arr
push_front(arr, 4)
print arr