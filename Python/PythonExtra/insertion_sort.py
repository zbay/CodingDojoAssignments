def insertion_sort(arr):
    for i in range(1, len(arr), 1):
        insertAt = i
        for j in range(i-1, -1, -1):
            if arr[i] <= arr[j]: # decrement the insertion index
                insertAt -= 1
        insertThis = arr[i] # save the value to shift, so it isn't overwritten
        for k in range(i, insertAt, -1): # shift all to the right, before inserting the value where it needs to go
            arr[k] = arr[k-1]
        arr[insertAt] = insertThis
    return arr

print insertion_sort([8,5,2,6,9,3,1,4,0,7])