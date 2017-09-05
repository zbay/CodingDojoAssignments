import random
def grades():
    print "Scores and Grades"
    for i in range(10):
        score = random.randint(60, 101)
        grade = ""
        if score >= 90:
            grade = "A"
        elif score >= 80:
            grade = "B"
        elif score >= 70:
            grade = "C"
        elif grade >= 60:
            grade = "D"
        else:
            grade = "F"
        print "Score: " + str(score) + "; Your grade is " + grade

    print "End of the program. Bye!"

grades()