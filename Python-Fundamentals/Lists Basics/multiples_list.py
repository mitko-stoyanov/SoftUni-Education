factor = int(input())
count = int(input())
list_int = [factor]
new_value = factor
while len(list_int) < count:
    new_value += factor
    list_int.append(new_value)

print(list_int)