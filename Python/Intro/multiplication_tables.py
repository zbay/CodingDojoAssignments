def multiplication_tables():
    print "x   1   2   3   4   5   6   7   8   9   10  11  12"
    for row in range(1, 13, 1):
        rowStr = str(row) + ""
        if len(rowStr) == 2:
            rowStr += "  "
        else:
            rowStr += "   "
        for col in range(1, 13, 1):
            newVal = row*col
            newValStr = str(newVal)
            spaces = ""
            if len(newValStr) == 1:
                spaces = "   "
            elif len(newValStr) == 2:
                spaces = "  "
            else:
                spaces = " "
            rowStr += newValStr + spaces
        print rowStr
multiplication_tables()