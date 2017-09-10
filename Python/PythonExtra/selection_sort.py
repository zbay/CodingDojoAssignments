def selection_sort(arr):
    for i in range(0, len(arr), 1): # outer loop: from start to end, start with minimum as first value in unsorted section
        min = arr[i]
        min_index = i
        for j in range(i+1, len(arr), 1): # inner loop: find minimum of the unsorted part of the array
            if min > arr[j]:
                min = arr[j]
                min_index = j
        arr[i], arr[min_index] = arr[min_index], arr[i]
    return arr

print selection_sort([8,5,2,6,9,3,1,4,0,7])