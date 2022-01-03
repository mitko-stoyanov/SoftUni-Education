integers = input()
my_list = integers.split()
nums_to_be_removed = int(input())
count_of_removed_numbers = 0
new_list = []

for element in my_list:
    new_element = int(element)
    new_list.append(new_element)

num_remove = 0
while count_of_removed_numbers < nums_to_be_removed:
    num_remove = min(new_list)
    new_list.remove(num_remove)
    count_of_removed_numbers += 1
print(*new_list, sep = ", ")