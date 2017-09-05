students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names(arr):
    for i in range(len(arr)):
        print arr[i]['first_name'] + " " + arr[i]['last_name']
names(students)

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def dojo_names(obj):
    print "Students"
    for i in range(0, len(obj['Students']), 1):
        name = obj['Students'][i]
        print (str(i+1) + " - " + name['first_name'] + " " + name['last_name'] + " - " + str(len(name['first_name']) + len(name['last_name']))).upper()
    print "Instructors"
    for i in range(0, len(obj['Instructors']), 1):
        name = obj['Instructors'][i]
        print (str(i+1) + " - " + name['first_name'] + " " + name['last_name'] + " - " + str(len(name['first_name']) + len(name['last_name']))).upper()

dojo_names(users)