my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def make_tuples(obj):
    tuple_arr = []
    for key, val in obj.iteritems():
        tuple_arr.append((key, val))
    return tuple_arr

print(make_tuples(my_dict))
