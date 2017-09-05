def make_dict(arr1, arr2):
  key_arr = arr1
  val_arr = arr2
  if len(arr1) < len(arr2):
      key_arr = arr2
      val_arr = arr1
  new_dict = {}
  for i in range(0, len(key_arr), 1):
      if i < len(val_arr):
        new_dict[key_arr[i]] = val_arr[i]
      else:
        new_dict[key_arr[i]] = ""
  return new_dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

print(make_dict(name, favorite_animal))

name_short = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane"]
print(make_dict(name_short, favorite_animal))