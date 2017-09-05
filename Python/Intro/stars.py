def draw_stars(arr):
    for i in range(0, len(arr), 1):
        if type(arr[i]) is int:
            print "*" * arr[i]
        if type(arr[i]) is str:
            print arr[i][0].lower() * len(arr[i])

draw_stars([4, 6, 1, 3, 5, 7, 25])
draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])