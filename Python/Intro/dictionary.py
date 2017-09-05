zach = {"Name": "Zachary Williams", "Age": 24, "Country of birth": "the United States of America", "Favorite language": "JavaScript"}
def dictionary_print(dictionary):
    print "My name is " + dictionary["Name"]
    print "My age is " + str(dictionary["Age"])
    print "My country of birth is " + dictionary["Country of birth"]
    print "My favorite language is " + dictionary["Favorite language"]

dictionary_print(zach)