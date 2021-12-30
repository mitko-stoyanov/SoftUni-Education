my_string = input()
my_list = my_string.split(' ')
new_list = []
for element in my_list:
    new_element = int(element) * -1
    new_list.append(new_element)
print(new_list)