def bubble_sort(arr):
    for i in range(0, len(arr), 1):
        for j in range(i, len(arr), 1):
            if arr[i] > arr[j]:
                arr[i], arr[j] = arr[j], arr[i]
    return arr

print bubble_sort([5, 3, 1, 6, 7, 2, 4, 8])